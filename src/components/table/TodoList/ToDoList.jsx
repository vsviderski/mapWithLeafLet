import TodoItem from "./TodoItem/TodoItem";
import "./todolist.less";

const ToDoList = ({ todoList, setTodoList }) => (
	<div>
		{!!todoList.length && <div className="todolist">
		<div className="todolist_item">№ заявки</div>
			<div className="todolist_item">ОТ lat.</div>
			<div className="todolist_item">ОТ lng.</div>
			<div className="todolist_item">ДО lat.</div>
			<div className="todolist_item">ДО lng.</div>
		</div>
		}
		{todoList.map(todoItem => (
			<div key={todoItem.id}>
				<TodoItem todoItem={todoItem} setTodoList={setTodoList}  />
			</div>
		))}
	</div>
);

export default ToDoList;
