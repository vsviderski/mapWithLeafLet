import AddRoute from './AddRoute';
import RoutesTable from './RoutesTable';
import './routesList.css';

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
