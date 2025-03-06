import { TodoId, TodoType } from "../types";

interface Props extends TodoType {
    onToggleCompleted: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void,
    onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FunctionComponent<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleted}) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={(event)=> {
                    onToggleCompleted({id, completed: event.target.checked})
                }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo({ id })
                }}
            />
        </div>
    );
}