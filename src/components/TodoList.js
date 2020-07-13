import React from 'react';
import Todo from './Todo'
import { List } from "@material-ui/core";

const TodoList = ({todos, deleteTodo, toggleCompleted}) => {
    return <List>
        {
        todos.map((todo = {}) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>)
        }
    </List>
};
export default TodoList;