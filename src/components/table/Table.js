import "./table.css";
import AddTodo from "./AddTodo/AddToDo";
import TodoList from "./TodoList/ToDoList";
const Table = ({todoList, setTodoList}) => {
	return <div className="container-content">
		<h2>Список заявленных маршрутов</h2>
		<AddTodo todoList={todoList} setTodoList={setTodoList}/>
		<TodoList todoList={todoList} setTodoList={setTodoList} />
		</div>;
};

export default Table;
