import { useState } from "react";
import { TodoType } from "../types";
import { Todo } from "./Todo";

interface TodoProps {
    todos: TodoType[]
    onToggleCompleted: (id: string, completed: boolean) => void,
    removeTodo: (id: string) => void,
    setTitle:  (params: { id: string, title: string }) => void
}

export const Todos: React.FC<TodoProps> = ({ todos, removeTodo, onToggleCompleted, setTitle }) => {
    const [isEditing, setIsEditing] = useState('');

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={`
                        ${todo.completed ? 'completed' : ''}
                        ${isEditing === todo.id ? 'editing' : ''}
                    `}
                    onDoubleClick={() => { setIsEditing(todo.id) }}
                >
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        onToggleCompleted={onToggleCompleted}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        setTitle={setTitle}
                    />
                </li>
            ))}
        </ul> 
    );
}