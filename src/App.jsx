import MainMap from "./components/LeafletMap";
import RoutesList from "./components/table";
import "./App.css";

const App = () => {
	return (
		<div className="container">
			<RoutesList />
			<MainMap />
		</div>
	);
}

export default App;
