import { useState } from "react";
import { Todo } from "./Interfaces/Todo";
import { Todos } from "./components/Todos";

const mockTodos: Todo[] = [
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
  const [todos] = useState(mockTodos);

  return (
    <>
      <Todos todos={todos}/>
    </>
  );
}

export default App;
