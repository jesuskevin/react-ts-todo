import { FilterValues } from "../types";
import { Filters } from "./Filters";

interface Props {
    activeCount: number,
    completedCount: number,
    filterSelected: FilterValues,
    handleClearCompleted: () => void,
    handleFilterChange: (filter: FilterValues) => void
}

export const Footer: React.FunctionComponent<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleClearCompleted,
    handleFilterChange
}) => {
    return (
        <footer className="footer" style={{display: 'flex', justifyContent: "space-between"}}>
            <span className="todo-count">
                <strong>{activeCount}</strong> pendigns todos
            </span>
            <Filters
                filterSelected={filterSelected}
                handleFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={handleClearCompleted}
                    >
                        Clear Completed
                    </button>
                )
            }
        </footer>
    );
}