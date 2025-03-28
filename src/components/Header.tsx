import { CreateTodo } from "./CreateTodo";

interface Props {
    handleAddTodo: (title: string) => void,
}

export const Header: React.FunctionComponent<Props> = ({ handleAddTodo }) => {
    return (
        <header className="header">
            <h1>TODO APP</h1>

            <CreateTodo handleAddTodo={handleAddTodo}/>
        </header>
    );
}