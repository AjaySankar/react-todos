import React from 'react';

const Todo = ({todo, deleteTodo}) => {
    const {id = 0, task = 'Empty Todo'} = todo
    return <li>
                <div>
                    <span> {task} </span>
                    <input type="button" value="delete" onClick={() => deleteTodo(id)}/>
                </div>
            </li>
};
export default Todo;