import { useState } from "react";
import { Todos } from "./components/Todos";
import { TodoId, TodoType } from "./types";

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

  const handleRemove = ({ id }: TodoId): void => {
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

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompleted={hanldeCompleted}
        todos={todos}
      />
    </div>
  );
}

export default App;
