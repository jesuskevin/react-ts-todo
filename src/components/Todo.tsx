import { TodoType } from "../types";

export const Todo: React.FunctionComponent<TodoType> = ({id, title, completed}) => {
    return (
        <div className="view" id={id}>
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={()=> {}}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {}}
            />
        </div>
    );
}