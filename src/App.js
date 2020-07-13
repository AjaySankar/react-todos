import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, addTodos] = useState([])
  function addTodo(newTodo) {
    addTodos([...todos, newTodo])
  }
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={todos}/>
        <TodoForm addTodo={addTodo}/>
      </header>
    </div>
  );
}

export default App;
