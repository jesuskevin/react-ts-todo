import { Todo } from "../types";

interface TodoProps {
    todos: Todo[]
}

export const Todos: React.FC<TodoProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul> 
    );
}