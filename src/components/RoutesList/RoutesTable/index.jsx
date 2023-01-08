import { useState } from "react";
import { useSelector } from "react-redux";
import Route from "./Route";
import "./style.less";

const RoutesTable = () => {
	const routes = useSelector(state => state.coordinates);
	const [selectedRoute, setSelectedRoute] = useState(null)

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
			{routes.map((route) => (
				<div
					key={route.id}
					className={selectedRoute === route ? "todoItem_ul-active" : "todoItem_ul"}
					onClick={() => setSelectedRoute(route)}
				>
					<Route route={route} />
				</div>
			))}
		</div>
	);
}

export default RoutesTable;
