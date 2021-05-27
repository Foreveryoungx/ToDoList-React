
import * as React from 'react';
import {Button, Form, Input} from "semantic-ui-react";
import {useState} from "react";

export const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input value={userInput} type="text" onChange={handleChange} placeholder="Please  add a task..."/>
            <Button inverted color='red'>Add</Button>
        </Form>
    );
};

export default ToDoForm;