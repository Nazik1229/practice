import React from 'react';
import TodoList from './components/TodoList';
import TodoUsed from './components/TodoUsed';
import './style.css'

function App() {
  return (
    <div className="form">
      <h1>Todo-List</h1>
      <TodoUsed />
      <TodoList />
    </div>
  );
}

export default App;

