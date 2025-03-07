import { useEffect, useRef, useState } from "react";
import { TodoType } from "../types";

interface Props extends TodoType {
    onToggleCompleted: (id: string, completed: boolean) => void,
    removeTodo: (id: string) => void
    isEditing: string,
    setIsEditing: (completed: string) => void
    setTitle: (params: { id: string, title: string }) => void
}

export const Todo: React.FunctionComponent<Props> = ({id, title, completed, removeTodo, onToggleCompleted, isEditing, setIsEditing, setTitle}) => {
    const [editedTitle, setEditedTitle] = useState(title)
    const inputEditTitle = useRef<HTMLInputElement>(null)

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
        setEditedTitle(editedTitle.trim())

        if (editedTitle !== title) {
            setTitle({ id, title: editedTitle })
        }

        if (editedTitle === '') removeTodo(id)
            setIsEditing('')
        }

        if (e.key === 'Escape') {
            setEditedTitle(title)
            setIsEditing('')
        }
    }

    useEffect(() => {
        inputEditTitle.current?.focus()
    }, [isEditing])


    return (
        <>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={completed}
                    onChange={(event)=> {
                        onToggleCompleted(id, event.target.checked)
                    }}
                />
                <label>{title}</label>
                <button
                    className="destroy"
                    onClick={() => {
                        removeTodo(id)
                    }}
                />
            </div>
            <input
                className='edit'
                value={editedTitle}
                onChange={(e) => { setEditedTitle(e.target.value) }}
                onKeyDown={handleKeyDown}
                onBlur={() => { setIsEditing('') }}
                ref={inputEditTitle}
            />
        </>
    );
}