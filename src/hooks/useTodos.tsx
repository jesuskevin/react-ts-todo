import { useEffect, useReducer } from "react";
import { TodoType, FilterValues, TodoId, TodoTitle } from "../types";
import { TODO_FILTERS } from "../const";
import { addTodo, fetchTodos, updateTodos } from "../services/todos";

const initialState = {
  sync: false,
  todos: [],
  filterSelected: (() => {
    // read from url query params using URLSearchParams
    const params = new URLSearchParams(window.location.search);
    const filter = params.get("filter") as FilterValues | null;
    if (filter === null) return TODO_FILTERS.ALL;
    // check filter is valid, if not return ALL
    return Object.values(TODO_FILTERS).includes(filter)
      ? filter
      : TODO_FILTERS.ALL;
  })(),
};

type Action =
  | { type: "INIT_TODOS"; payload: { todos: TodoType[] } }
  | { type: "CLEAR_COMPLETED" }
  | { type: "COMPLETED"; payload: { id: string; completed: boolean } }
  | { type: "FILTER_CHANGE"; payload: { filter: FilterValues } }
  | { type: "REMOVE"; payload: { id: string } }
  | { type: "SAVE"; payload: TodoType}
  | { type: "UPDATE_TITLE"; payload: { id: TodoId; title: TodoTitle } };

interface State {
  sync: boolean;
  todos: TodoType[];
  filterSelected: FilterValues;
}

const reducer = (state: State, action: Action): State => {
  if (action.type === "INIT_TODOS") {
    const { todos } = action.payload;
    return {
      ...state,
      sync: false,
      todos,
    };
  }

  if (action.type === "CLEAR_COMPLETED") {
    return {
      ...state,
      sync: true,
      todos: state.todos.filter((todo) => !todo.completed),
    };
  }

  if (action.type === "COMPLETED") {
    const { id, completed } = action.payload;
    return {
      ...state,
      sync: true,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }

        return todo;
      }),
    };
  }

  if (action.type === "FILTER_CHANGE") {
    const { filter } = action.payload;
    return {
      ...state,
      sync: true,
      filterSelected: filter,
    };
  }

  if (action.type === "REMOVE") {
    const { id } = action.payload;
    return {
      ...state,
      sync: true,
      todos: state.todos.filter((todo) => todo.id !== id),
    };
  }

  if (action.type === "SAVE") {
    const newTodo = action.payload;

    return {
      ...state,
      sync: true,
      todos: [...state.todos, newTodo],
    };
  }

  if (action.type === "UPDATE_TITLE") {
    const { id, title } = action.payload;
    return {
      ...state,
      sync: true,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
          };
        }

        return todo;
      }),
    };
  }

  return state;
};

export const useTodos = (): {
  activeCount: number;
  completedCount: number;
  todos: TodoType[];
  filterSelected: FilterValues;
  handleClearCompleted: () => void;
  handleCompleted: (id: string, completed: boolean) => void;
  handleFilterChange: (filter: FilterValues) => void;
  handleRemove: (id: string) => void;
  handleSave: (title: string) => void;
  handleUpdateTitle: (params: { id: TodoId; title: TodoTitle }) => void;
} => {
  const [{ sync, todos, filterSelected }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleCompleted = (id: string, completed: boolean): void => {
    dispatch({ type: "COMPLETED", payload: { id, completed } });
  };

  const handleRemove = (id: string): void => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const handleUpdateTitle = async ({
    id,
    title,
  }: {
    id: TodoId;
    title: TodoTitle;
  }): Promise<void> => {
    try {
      await updateTodos({id, title});
      dispatch({ type: "UPDATE_TITLE", payload: { id, title } });
    } catch (error) {
      console.error("Error al actualizar el todo:", error);
    }
  };

  const handleSave = async (title: string): Promise<void> => {
    const data = {
      title,
      completed: false,
    };
  
    try {
      const newTodo = await addTodo(data);
      dispatch({type: "SAVE", payload: newTodo})
    } catch (error) {
      console.error("Error al guardar el todo:", error);
    }
  };

  const handleClearCompleted = (): void => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const handleFilterChange = (filter: FilterValues): void => {
    dispatch({ type: "FILTER_CHANGE", payload: { filter } });

    const params = new URLSearchParams(window.location.search);
    params.set("filter", filter);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed;
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed;
    }

    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  useEffect(() => {
    fetchTodos()
      .then((todos) => {
        dispatch({ type: "INIT_TODOS", payload: { todos } });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos,
  };
};
