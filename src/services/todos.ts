import axios from '../api/axios';
import { TodoId, TodoTitle, TodoType } from '../types'

const API_URL = '/api/todo';

export const fetchTodos = async (): Promise<TodoType[]> => {
  const res = await axios.get(`${API_URL}`);
  if (res.status >= 400) {
    console.error('Error fetching todos')
    return []
  }

  const { todos: todos } = await res.data as { todos: TodoType[] }

  return todos
}

export const addTodo = async (todos: Omit<TodoType, "id">): Promise<TodoType> => {
  const res = await axios.post(API_URL, {
    ...todos
  });

  if (res.status >= 400) {
    throw Error("Something went wroing, please try again later.");
  }

  const todo = await res.data;
  return todo;
};

export const updateTodos = async ({ id, title }: { id: TodoId, title: TodoTitle }): Promise<TodoType> => {
  const res = await axios.put(`${API_URL}/${id}`, {
    title
  })

  if (res.status >= 400) {
    throw Error("Something went wroing, please try again later.");
  }

  const todo = await res.data;
  return todo;
}

export const removeTodo = async (id: TodoId): Promise<boolean> => {
  const res = await axios.delete(`${API_URL}/${id}`);

  if (res.status >= 400) {
    throw Error("Something went wroing, please try again later.");
  }

  return res.data;
}

export const markCompleted = async (id: TodoId): Promise<boolean> => {
  const res = await axios.post(`${API_URL}/${id}/complete`);

  return res.data;
}

export const clearCompleted = async (todosCompleted: TodoType[]): Promise<boolean> => {
  const res = await axios.delete(`${API_URL}/clear-completed`, {
    data: todosCompleted
  })

  return res.data;
}

export const summarize = async (): Promise<string> => {
  const res = await axios.get(`${API_URL}/summarize`);
  if (res.status >= 400) {
    console.error('Something went wrong, please try again later.')
    return '';
  }

  return res.data.summary;
}