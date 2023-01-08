import { useState } from "react";
import { useSelector } from "react-redux";
import Route from "./Route";
import "./routesTable.less";

const RoutesTable = () => {
	const routes = useSelector(state => state.coordinates);
	const [state, setState] = useState(null)

	return (
		<div>
			{!!routes.length && <div className="todolist">
				<div className="todolist_item">№</div>
				<div className="todolist_item">ОТ lat.</div>
				<div className="todolist_item">ОТ lng.</div>
				<div className="todolist_item">ДО lat.</div>
				<div className="todolist_item">ДО lng.</div>
			</div>
			}
			{routes.map((todoItem) => (
				<div 
					key={todoItem.id} 
					className={state === todoItem ? "todoItem_ul-active" : "todoItem_ul"} 
					onClick={() => setState(todoItem)}
				>
					<Route todoItem={todoItem} />
				</div>
			))}
		</div>
	);
}

export default RoutesTable;
