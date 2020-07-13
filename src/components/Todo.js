import React from 'react';

const Todo = ({todo, deleteTodo, toggleCompleted}) => {
    const {id = 0, task = 'Empty Todo', completed=false} = todo
    return <li>
                <div>
                    <input type="checkbox" id={id} name={task} value={task} checked={completed} onChange={() => toggleCompleted(id)}/>
                    <label htmlFor={id}> {task}</label>
                    <input type="button" value="delete" onClick={() => deleteTodo(id)}/>
                </div>
            </li>
};
export default Todo;