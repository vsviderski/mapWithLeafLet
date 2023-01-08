import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { collapseRoutersPanel } from '../utils/collapseRoutersPanel';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const LeafletMap = () => {
  const polylineData = useSelector(state => state.polyline.polylineOptions);
  const [map, setMap] = useState(null)
  const [route, setRoute] = useState(null)

  useEffect(() => {
    const leafletMap = L.map('map').setView([59.56, 30.18], 8);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(leafletMap);
    setMap(leafletMap);
  }, [])

  useEffect(() => {
    if (polylineData) {
      const [fromLatitude, fromLongitude] = polylineData.waypoints[0].location
      const [toLatitude, toLongitude] = polylineData.waypoints[1].location
      const container = L.DomUtil.get('map');

      if (container !== null) {
        container._leaflet_id = null;
      }

      if (route) {
        route.remove();
      }

      map.setView([fromLatitude, fromLongitude]);

      const newRoute = L.Routing.control({
        waypoints: [L.latLng(fromLatitude, fromLongitude), L.latLng(toLatitude, toLongitude)],
        lineOptions: {
          styles: [
            { color: '#439958', fill: true, fillColor: 'yellow', weight: 5, fillOpacity: 0.4 },
          ]
        },
        collapsible: true
      }).addTo(map);

      collapseRoutersPanel();

      const southWest = L.latLng(fromLatitude, fromLongitude);
      const northEast = L.latLng(toLatitude, toLongitude);
      const bounds = L.latLngBounds(southWest, northEast);
      map.flyToBounds(bounds);

      setRoute(newRoute);
    }
  }, [polylineData, map]);

  return <div id='map' />;
};

export default LeafletMap;
