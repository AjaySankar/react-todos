import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from "@material-ui/core";

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
        if(task.trim()) {
            addTodo({...todo, ...{id: uuidv4()}})
            setTodo({...defualtTodo})
        }
    }
    return <form onSubmit={handleSubmit}>
        <TextField label="Task" type="text" name="task" value={todo.task} onChange={handleChange}/>
        <Button type="submit">Add Todo</Button>
    </form>
}

export default TodoForm