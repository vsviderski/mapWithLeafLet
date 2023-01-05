import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import LeafletRoutingMachine from "./RoutingMachine";




const MainMap = ({todoList}) => {
	const position = [59.57, 30.19];
  


	return (
  
		<Map center={position} zoom={12} scrollWheelZoom={true} >
			<TileLayer 
				attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>You should to be here</Popup>
			</Marker>
      <LeafletRoutingMachine todoList={todoList} />
		</Map>

	);
};

export default MainMap;
