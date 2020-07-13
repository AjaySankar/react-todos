import React, { useState } from 'react';
import Todo from './Todo';

const TodoForm = () => {
    const [todo, setTodo] = useState({
        id: "",
        task:"",
        completed: false
    })
    function handleChange(e){
        window.console.log(e.target.value)
        setTodo({...todo, ...{'task':e.target.value}})
    }
    return <form>
        <input type="text" value = {todo.task} onChange={handleChange}/>
        <input type="submit"/>
    </form>
}

export default TodoForm