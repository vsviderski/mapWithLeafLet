import { useEffect } from "react";
import L from 'leaflet/dist/leaflet'
import 'leaflet-routing-machine'



const LeafletRoutingMachine = ({todoList}) => {


console.log(todoList)

useEffect(()=>{
	
	let map = L.map('map', {
		center: [50.22, 30.22],
		zoom: 3,
		 });

	L.Routing.control({
		waypoints: [
			L.latLng('59.829', '30.29'),
			L.latLng('59.829', '36.42')
		]
	}).addTo(map);
}, [])
return (

<div id="map"></div>

	
)
}


export default LeafletRoutingMachine;