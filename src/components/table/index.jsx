import './table.css';
import AddRoute from './AddTodo';
import RoutesTable from './TodoList';

const RoutesList = () => {
  return (
    <div className="container-content">
      <h2>Список заявленных маршрутов</h2>
      <AddRoute />
      <RoutesTable />
    </div>
  );
};

export default RoutesList;
