import { TodoType } from '../types'

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

export const updateTodos = async ({ todos }: { todos: TodoType[] }): Promise<boolean> => {
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': import.meta.env.VITE_API_BIN_KEY
    },
    body: JSON.stringify(todos)
  })

  return res.ok
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