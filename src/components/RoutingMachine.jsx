/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const LeafletRoutingMachine = () => {
  const polylineData = useSelector(state => state.polyline.polylineOptions);

  useEffect(() => {
    if (polylineData) {
      const [fromLatitude, fromLongitude] = polylineData.waypoints[0].location
      const [toLatitude, toLongitude] = polylineData.waypoints[1].location
      const container = L.DomUtil.get('map');

      if (container != null) {
        container._leaflet_id = null;
      }

      L.Routing.control({
        waypoints: [L.latLng(fromLatitude, fromLongitude), L.latLng(toLatitude, toLongitude)]/* polylineData.waypoints */,
        routeWhileDragging: true,
      }).addTo(L.map('map'))
    }
  }, [polylineData]);

  return <div id='map' />;
};

export default LeafletRoutingMachine;
