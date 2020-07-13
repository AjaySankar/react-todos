import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function App() {
  const [todos, addTodos] = useState([])

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      addTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(newTodo) {
    addTodos([...todos, newTodo])
  }

  function deleteTodo(todoId) {
    addTodos(todos.filter(({id}) => id !== todoId))
  }

  function toggleCompleted(todoId) {
    addTodos(todos.map(todo => {
      if(todo.id === todoId) {
        return {...todo, ...{'completed': !todo.completed}}
      }
      return todo
    }))
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React Todo
      </Typography>
      <header className="App-header">
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>
        <TodoForm addTodo={addTodo}/>
      </header>
    </div>
  );
}

export default App;
