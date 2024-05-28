import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/slices';
import TodoList from './components/TodoList';
import './style.css'

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const addItem = useCallback(() => {
    if (value.length > 5) {
      dispatch(addTodo(value));
      setValue('');
    } else {
      alert('Длина элемента должна быть не менее 6 символов.');
    }
  },[dispatch, value]);

  const inputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  };

  return (
    <div className="form">
      <h1>Todo-List</h1>
      <div>
        <input type="text" onChange ={inputChange} value={value} placeholder="Послушать" />
        <button onClick={addItem}>Add</button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
