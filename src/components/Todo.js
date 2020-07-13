import React from 'react';

const Todo = ({todo}) => {
    const {id = 0, task = 'Empty Todo', completed = false} = todo
    return <li> {task} </li>
};
export default Todo;