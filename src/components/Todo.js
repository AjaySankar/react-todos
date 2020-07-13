import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from 'react';

const Todo = ({todo, deleteTodo, toggleCompleted}) => {
    const {id = 0, task = 'Empty Todo', completed=false} = todo
    return  <ListItem style={{ display: "flex" }}>
                <Checkbox checked={completed} onClick={() => toggleCompleted(id)} />
                <Typography
                    variant="body1"
                    style={{
                    textDecoration: completed ? "line-through" : null
                    }}
                >
                    {task}
                </Typography>
                <IconButton onClick={() => deleteTodo(id)}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
};
export default Todo;