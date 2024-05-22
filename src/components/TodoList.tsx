import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/slices';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            id={todo.id} 
            title={todo.title} 
            completed={todo.completed} 
            time={todo.time}
        />
      ))}
    </ul>
  );
};

export default TodoList;