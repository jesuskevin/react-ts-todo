import { TodoId, TodoTitle, TodoType } from '../types'

const API_URL = 'http://127.0.0.1:8000/api/todo';

export const fetchTodos = async (): Promise<TodoType[]> => {
  const res = await fetch(API_URL)
  if (!res.ok) {
    console.error('Error fetching todos')
    return []
  }

  const { data: todos } = await res.json() as { data: TodoType[] }
  return todos
}

export const updateTodos = async ({ id, title }: { id: TodoId, title: TodoTitle }): Promise<TodoType> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title})
  })

  const todo = await res.json();
  return todo;
}

export const addTodo = async (data: Omit<TodoType, "id">): Promise<TodoType> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  const todo = await res.json();
  return todo;
};

export const removeTodo = async (id: TodoId): Promise<boolean> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.ok;
}

export const clearCompleted = async (todosCompleted: TodoType[]): Promise<boolean> => {
  const res = await fetch(`${API_URL}/clear-completed`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todosCompleted),
  })

  return res.ok;
}