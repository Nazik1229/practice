import { configureStore } from '@reduxjs/toolkit';
import todosReducer, { TodosState } from './slices';

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});

export interface RootState {
  todos: TodosState;
}

export type AppDispatch = typeof store.dispatch;