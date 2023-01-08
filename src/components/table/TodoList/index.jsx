import { useSelector } from "react-redux";
import Route from "./TodoItem";
import "./todolist.less";
import { useState } from "react";

const RoutesTable = () => {
	const listCoordinates = useSelector(state => state.coordinates);
	const [state, setState] = useState(null)

	const handleClick= (todoItem) => setState(todoItem)
	
	return (
		<div>
			{!!listCoordinates.length && <div className="todolist">
				<div className="todolist_item">№</div>
				<div className="todolist_item">ОТ lat.</div>
				<div className="todolist_item">ОТ lng.</div>
				<div className="todolist_item">ДО lat.</div>
				<div className="todolist_item">ДО lng.</div>
			</div>
			}
			{listCoordinates.map((todoItem) => (
				<div key={todoItem.id} className={state === todoItem  ? "todoItem_ul-active" : "todoItem_ul"}  onClick={() => handleClick(todoItem)}>
					<Route todoItem={todoItem}  />
				</div>
			))}
		</div>
	);
}

export default RoutesTable;
