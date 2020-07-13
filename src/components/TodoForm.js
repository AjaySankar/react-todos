import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({addTodo}) => {
    const defualtTodo = {
        id: "",
        task:"",
        completed: false
    }
    const [todo, setTodo] = useState(defualtTodo)
    function handleChange(e){
        setTodo({...todo, ...{'task':e.target.value}})
    }
    function handleSubmit(e){
        e.preventDefault();
        const {task=""} = todo
        if(task.length > 0) {
            addTodo({...todo, ...{id: uuidv4()}})
            setTodo({...defualtTodo})
        }
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" value={todo.task} onChange={handleChange}/>
        <input type="submit" value="Add Todo"/>
    </form>
}

export default TodoForm