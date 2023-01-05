import React from "react";
import MainMap from "./components/LeafletMap";
import Table from "./components/table/Table";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([]);

  console.log(todoList)
  return (
    <div className="container">
      <Table todoList={todoList} setTodoList={setTodoList} />
      <MainMap todoList={todoList} />
    </div>
  );
}

export default App;
