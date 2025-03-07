import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValues, TodoTitle, TodoType } from "./types";
import { TODO_FILTERS } from "./const";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos: TodoType[] = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValues>(TODO_FILTERS.ALL);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  }

  const hanldeCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  }

  const handleFilterChange = (filter: FilterValues) => {
    setFilterSelected(filter);
  }

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => {
      return !todo.completed;
    });

    setTodos(newTodos);
  }

  const handleAddTodo = ({title}: TodoTitle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const handleUpdateTitle = ({ id, title }: { id: string, title: string }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header
        handleAddTodo={handleAddTodo}
      />
      <Todos
        setTitle={handleUpdateTitle}
        removeTodo={handleRemove}
        onToggleCompleted={hanldeCompleted}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleClearCompleted={handleClearCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
