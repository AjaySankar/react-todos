import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, toggleCompleted}) => {
    window.console.log(todos)
    return <ul>
        {
        todos.map((todo = {}) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>)
        }
    </ul>
};
export default TodoList;