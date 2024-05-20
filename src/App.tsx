import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/slices';
import TodoList from './components/TodoList';
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

  return (
    <div className="form">
      <h1>Todo-List</h1>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Послушать" />
        <button onClick={addItem}>Add</button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
