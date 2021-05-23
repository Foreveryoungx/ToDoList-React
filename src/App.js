import React from "react";
import './App.css';
import Table from "./components/Table";
import InputBox from "./components/InputBox";
import {Container} from "semantic-ui-react";


function App() {
  return (
    <div className="App" style={{margin: 200}}>



            <Table />
            <InputBox/>

    </div>
  );
}

export default App;
