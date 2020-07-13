import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, addTodos] = useState([])
  const testTodos = [{'id': 1, 'task': 'Study 1', 'completed': true},{'id': 2, 'task': 'Study 2', 'completed': true}];
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={testTodos}/>
        <TodoForm/>
      </header>
    </div>
  );
}

export default App;
