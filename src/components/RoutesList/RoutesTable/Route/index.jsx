import { useActions } from "hooks/useActions";
 import {DeleteOutlined} from '@ant-design/icons'
import "./style.less";

const Route = ({ route }) => {
	const { removeCoordinate, getPolylineAction } = useActions();

	return (
		<div
			className="wrap-content"
			onClick={() => {
				getPolylineAction(route)
			}}
		>
			<div className="todoItem_lists"  >
				<div className="todoItem_li">{route.number}</div>
				<div className="todoItem_li">{route.fromLatitude}</div>
				<div className="todoItem_li">{route.fromLongitude}</div>
				<div className="todoItem_li">{route.toLatitude}</div>
				<div className="todoItem_li">{route.toLongitude}</div>
				<div className="todoItem_li">
					<div className="buttons">
						<button onClick={() => removeCoordinate(route.id)}>
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
