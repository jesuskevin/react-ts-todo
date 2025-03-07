import { TODO_FILTER_BUTTONS } from "../const";
import { FilterValues } from "../types";

interface Props {
    handleFilterChange: (filter: FilterValues) => void,
    filterSelected: FilterValues
}

export const Filters: React.FunctionComponent<Props> = ({filterSelected, handleFilterChange}) => {
    return (
        <ul className="filters">
            {
                Object.entries(TODO_FILTER_BUTTONS).map(([key, {href, literal}]) => {
                    const isSelected = key === filterSelected;
                    const className = isSelected ? 'seleted' : '';

                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={className}
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleFilterChange(key as FilterValues)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}