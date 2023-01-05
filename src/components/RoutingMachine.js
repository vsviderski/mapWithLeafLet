import { useEffect } from "react";
import L from 'leaflet'
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';



const LeafletRoutingMachine = () => {
useEffect(()=>{

	L.Routing.control({
		waypoints: [
			L.latLng('59.829', '30.29'),
			L.latLng('59.829', '36.42')
		]
	}).addTo(map);
}, [])
return (
null	
)
}


export default LeafletRoutingMachine;