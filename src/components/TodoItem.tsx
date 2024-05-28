import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../store/slices';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  time: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, time}) => {
  const dispatch = useDispatch();
  const [elapsedTime, setElapsedTime] = useState<string>('');

  const updateElapsedTime = useCallback(() => {
    const now = Date.now();
    const diff = now - time;
    const minutes = Math.floor(diff / 60000);
    setElapsedTime(minutes > 0 ? `${minutes}m` : '0m');
  }, [time]);

  useEffect(() => {
    updateElapsedTime();
    const interval = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, [updateElapsedTime]);

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
      <button className="time" > ({elapsedTime} ago)</button>
    </li>
  );
};

export default React.memo(TodoItem);