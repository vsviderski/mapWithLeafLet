import LeafletMap from "./components/LeafletMap";
import RoutesList from "components/RoutesList";
import "./App.css";

const App = () => {
	return (
		<div className="container">
			<RoutesList />
			<LeafletMap />
		</div>
	);
}

export default App;
