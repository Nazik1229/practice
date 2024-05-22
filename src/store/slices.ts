import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  time: number;
}

export interface TodosState {
  todos: Todo[];
}
  
const initialState: TodosState = {
  todos: [
    { id: 1, title: "Talk 2 me", completed: false, time: Date.now()},
    { id: 2, title: "Escape", completed: false, time: Date.now() },
    { id: 3, title: "Love you more than me", completed: false, time: Date.now() }
  ]
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        title: action.payload,
        completed: false,
        time: Date.now(),
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;