import { useActions } from "hooks/useActions";
import { DeleteOutlined } from '@ant-design/icons'
import "./style.less";

const Route = ({ route, selectedRoute, setSelectedRoute }) => {
	const { number, fromLatitude, fromLongitude, toLatitude, toLongitude } = route;
	const { removeCoordinate, getPolylineAction } = useActions();

	const onRemoveClick = (e) => {
		e.stopPropagation();
		removeCoordinate(route.id);
	}

	return (
		<div
			key={route.id}
			className={selectedRoute === route ? "todoItem_ul-active" : "todoItem_ul"}
			onClick={() => setSelectedRoute(route)}
		>
			<div className="wrap-content" onClick={() => { getPolylineAction(route) }}>
				<div className="todoItem_lists"  >
					<div className="todoItem_li">{number}</div>
					<div className="todoItem_li">{fromLatitude}</div>
					<div className="todoItem_li">{fromLongitude}</div>
					<div className="todoItem_li">{toLatitude}</div>
					<div className="todoItem_li">{toLongitude}</div>
					<div className="todoItem_li">
						<div className="buttons">
							<button onClick={onRemoveClick}>
								<span className="text">
									<DeleteOutlined />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Route;
