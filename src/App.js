import React from "react";
import MainMap from "./components/LeafletMap";
import Table from "./components/table/Table";
import "./App.css";
import { useState } from "react";

let initialState = [
	{
		id: Math.random(),
		number: "1",
		fromLatitude: "59.84660399",
		fromLongitude: "30.29496392",
		toLatitude: "59.82934196",
		toLongitude: "30.42423701",
	},
	{
		id: Math.random(),
		number: "2",
		fromLatitude: "59.82934196",
		fromLongitude: "30.42423701",
		toLatitude: "59.82761295",
		toLongitude: "30.41705607",
	},
	{
		id: Math.random(),
		number: "3",
		fromLatitude: "59.83567701",
		fromLongitude: "30.38064206",
		toLatitude: "59.84660399",
		toLongitude: "30.29496392",
	},
	{
		id: Math.random(),
		number: "4",
		fromLatitude: "59.84660399",
		fromLongitude: "30.29496392",
		toLatitude: "59.82761295",
		toLongitude: "30.41705607",
	},
	{
		id:Math.random(),
		number: "5",
		fromLatitude: "59.83567701",
		fromLongitude: "30.38064206",
		toLatitude: "59.84660399",
		toLongitude: "30.29496392",
	},
];

function App() {
	const [todoList, setTodoList] = useState(initialState);

	console.log(todoList);
	return (
		<div className="container">
			<Table todoList={todoList} setTodoList={setTodoList} />
			<MainMap todoList={todoList} />
		</div>
	);
}

export default App;
