import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/slices';
import TodoList from './components/TodoList';
import TodoUsed from './components/TodoUsed';
import './style.css'

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const addItem = () => {
    if (value.length > 5) {
      dispatch(addTodo(value));
      setValue('');
    } else {
      alert('Длина элемента должна быть не менее 6 символов.');
    }
  };

  const inputChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className="form">
      <h1>Todo-List</h1>
      <TodoUsed value={value} onChange={inputChange} onAdd={addItem} />
      <TodoList/>
    </div>
  );
}

export default App;
