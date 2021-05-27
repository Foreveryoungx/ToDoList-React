
import * as React from 'react';
import {Container} from "semantic-ui-react";

export const ToDo = ({todo, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <Container id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "strike" : ""}>
            {todo.task}
        </Container>
    );
};

export default ToDo;