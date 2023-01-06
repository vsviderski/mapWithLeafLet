import { useSelector } from "react-redux";
import Route from "./TodoItem";
import "./todolist.less";

const RoutesTable = () => {
	const listCoordinates = useSelector(state => state.coordinates);

	return (
		<div>
			{!!listCoordinates.length && <div className="todolist">
				<div className="todolist_item">№ заявки</div>
				<div className="todolist_item">ОТ lat.</div>
				<div className="todolist_item">ОТ lng.</div>
				<div className="todolist_item">ДО lat.</div>
				<div className="todolist_item">ДО lng.</div>
			</div>
			}
			{listCoordinates.map(todoItem => (
				<div key={todoItem.id}>
					<Route todoItem={todoItem} />
				</div>
			))}
		</div>
	);
}

export default RoutesTable;
