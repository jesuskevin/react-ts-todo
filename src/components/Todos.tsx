import { TodoId, TodoType } from "../types";
import { Todo } from "./Todo";

interface TodoProps {
    todos: TodoType[]
    onRemoveTodo: ({ id }: TodoId) => void,
}

export const Todos: React.FC<TodoProps> = ({ todos, onRemoveTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul> 
    );
}