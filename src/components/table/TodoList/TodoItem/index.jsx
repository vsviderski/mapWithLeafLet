import { useState } from "react";
import { useActions } from "hooks/useActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./route.less";

const Route = ({ todoItem }) => {
	const { removeCoordinate, getPolylineAction } = useActions();
	const [active, setActive] = useState(false);

	return (
		<div
			className={active ? "wrap-content__active" : "wrap-content"}
			onClick={() => {
				setActive(!active)
				getPolylineAction(todoItem)
			}}
			active={active}
		>
			<div className="todoItem_ul">
				<div className="todoItem_li" >{todoItem.number}</div>
				<div className="todoItem_li">{todoItem.fromLatitude}</div>
				<div className="todoItem_li">{todoItem.fromLongitude}</div>
				<div className="todoItem_li">{todoItem.toLatitude}</div>
				<div className="todoItem_li">{todoItem.toLongitude}</div>
				<div className="todoItem_li">
					<div className="buttons">
						<button onClick={() => removeCoordinate(todoItem.id)}>
							<span className="text">
								<FontAwesomeIcon icon={faTrash} />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Route;
