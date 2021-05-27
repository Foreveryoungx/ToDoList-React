import React, {useState} from "react";
import {Container} from "semantic-ui-react";
import data from "./data.json";
import './App.css'
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";



function App() {

    const [toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            // eslint-disable-next-line eqeqeq
            return task.id == Number(id) ? {...task, complete: !task.complete} : {...task};
        })
        setToDoList(mapped);
    }
    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
    }
  return (
    <Container className="App" style={{margin: 200}}>
            <Header />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
        <ToDoForm addTask={addTask}/>
    </Container>
  );
}

export default App;
