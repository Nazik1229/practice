import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../store/slices';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const completeItem = () => {
    dispatch(completeTodo(id));
  };

  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={completed ? 'completed' : ''}>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={completeItem}
      />
      <button className={completed ? 'isComplete complete' : 'isComplete uncomplete'} onClick={completeItem}>
        {completed ? 'Completed' : 'Uncomplete'}
      </button>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
      {!completed && <button onClick={deleteItem}>delete</button>}
    </li>
  );
};

export default TodoItem;