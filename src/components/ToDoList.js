
import * as React from 'react';
import {Button, Segment} from "semantic-ui-react";
import ToDo from "./ToDo";

export const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <Segment color={'black'}>
            {toDoList.map(todo => {
                return(
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Button style={{margin: '20px'}} onClick={handleFilter}>Clear List</Button>
        </Segment>
    );
};

export default ToDoList;