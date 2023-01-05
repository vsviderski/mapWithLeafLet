import { useState } from "react";

import Input from "./Input/Input";

import "./addtodo.less";


const AddTodo = ({ todoList, setTodoList }) => {
	const [number, setNumber] = useState(null);
	const [fromLatitude, setFromLatitude] = useState();
	const [fromLongitude , setFromLongitude]= useState();
	const [toLatitude, setToLatitude] = useState();
	const [toLongitude , setToLongitude]= useState();

	const [isCheckForm, setIsCheckForm] = useState(false);
	const titleInputError = isCheckForm && !number;
	

	
	
	const saveTodo = () => {
	
		if (number && fromLatitude && fromLongitude && toLatitude && toLongitude) {
			setTodoList([
				...todoList,
				{
					id: Math.random(),
					number:number,
					status: true,
					fromLatitude: fromLatitude,
					fromLongitude: fromLongitude,
					toLatitude:toLatitude,
					toLongitude:toLongitude,
				},
			]);
			setNumber('');
			setFromLatitude('');
			setFromLongitude('');
			setToLatitude('');
			setToLongitude('');
			setIsCheckForm(false);
		} else {
			setIsCheckForm(true)
		}
	};

	return (
		<div className="todo_container">
			<div className="todo_content">
				<div className="todo_inputs">
				<Input
						inputError={titleInputError}
						title="Номер заявки"		
						placeholder="№"
						value={number}
						onChange={setNumber}
						/>
				
				<Input
						inputError={titleInputError}
						title="Координаты ОТ"		
						placeholder="ОТ lat. "
						value={fromLatitude}
						onChange={setFromLatitude}
						/>

				<Input
						inputError={titleInputError}
						title="Координаты ОТ"		
						placeholder="ОТ lng."
						value={fromLongitude}
						onChange={setFromLongitude}
						/>
					<Input
						inputError={titleInputError}
						title="Координаты ДО"		
						placeholder="ДО lat."
						value={toLatitude}
						onChange={setToLatitude}
						/>
					<Input 
						inputError={titleInputError}
						title="Координаты ДО"		
						placeholder="ДО lng."
						value={toLongitude}
						onChange={setToLongitude}
						/>
					</div>
			
			</div>
			<button className="btn" onClick={saveTodo}>
				<span className="text">Добавить</span>
			</button>
		</div>
	);
};

export default AddTodo;
