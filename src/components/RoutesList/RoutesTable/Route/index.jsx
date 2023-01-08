import { useActions } from "hooks/useActions";
 import {DeleteOutlined} from '@ant-design/icons'
import "./style.less";

const Route = ({ route }) => {
	const { removeCoordinate, getPolylineAction } = useActions();
	const onRemoveClick = (e) => {
		e.stopPropagation();
		removeCoordinate(route.id);
	}

	return (
		<div className="wrap-content" onClick={() => { getPolylineAction(route) }}>
			<div className="todoItem_lists"  >
				<div className="todoItem_li">{route.number}</div>
				<div className="todoItem_li">{route.fromLatitude}</div>
				<div className="todoItem_li">{route.fromLongitude}</div>
				<div className="todoItem_li">{route.toLatitude}</div>
				<div className="todoItem_li">{route.toLongitude}</div>
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
	);
};

export default Route;
