import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, addTodos] = useState([])
  function addTodo(newTodo) {
    addTodos([...todos, newTodo])
  }
  function deleteTodo(todoId) {
    addTodos(todos.filter(({id}) => id !== todoId))
  }
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
        <TodoForm addTodo={addTodo}/>
      </header>
    </div>
  );
}

export default App;
