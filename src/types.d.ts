export interface TodoType {
    id: TodoId,
    title: TodoTitle,
    completed: TodoCompleted
};

export type TodoId = string;
export type TodoTitle = string;
export type TodoCompleted = boolean;

export type FilterValues = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];