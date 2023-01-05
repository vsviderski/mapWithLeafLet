import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./todoItem.less";

const TodoItem = ({ setTodoList, todoItem}) => {
	const [active, setActive] = useState(false);

	const deleteTodo = (id) => {
		setTodoList((prev) => [...prev.filter((item) => item.id !== id)]);
	};

	return (
		<div
			className={ active? "wrap-content__active" : "wrap-content"}
			onClick={() => setActive(!active)}
			active={active}
		>
			<div className= "todoItem_ul">
				<div className="todoItem_li" >{todoItem.number}</div>
				<div className="todoItem_li">{todoItem.fromLatitude}</div>
				<div className="todoItem_li">{todoItem.fromLongitude}</div>
				<div className="todoItem_li">{todoItem.toLatitude}</div>
				<div className="todoItem_li">{todoItem.toLongitude}</div>
				<div className="todoItem_li">
					<div className="buttons">
						<button onClick={() => deleteTodo(todoItem.id)}>
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

export default TodoItem;
