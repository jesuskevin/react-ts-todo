import { useState } from "react";
import { TodoTitle } from "../types";

interface Props {
    handleAddTodo: ({title}: TodoTitle) => void,
}

export const CreateTodo: React.FunctionComponent<Props> = ({ handleAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleAddTodo({title: inputValue});
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="new-todo"
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
                placeholder="What do you want to do?"
                autoFocus
            />
        </form>
    );
}