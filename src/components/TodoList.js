import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, deleteTodo}) => {
    return <ul>
        {
        todos.map((todo = {}) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)
        }
    </ul>
};
export default TodoList;