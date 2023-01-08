/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const LeafletMap = () => {



 
  const polylineData = useSelector(state => state.polyline.polylineOptions);
  const [map, setMap] = useState(null)
  const [route, setRoute] = useState(null)

  useEffect(() => {
    const leafletMap = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(leafletMap);
    setMap(leafletMap)
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
        route.spliceWaypoints(0, 2)
      }

      map.setView([fromLatitude, fromLongitude], 13);
      L.icon({})

      const newRoute = L.Routing.control({
        waypoints: [L.latLng(fromLatitude, fromLongitude), L.latLng(toLatitude, toLongitude)],
        lineOptions: {
          styles: [
            { color: '#439958', fill: true, fillColor: 'yellow', weight: 5, fillOpacity: 0.4 },
          ]
        }
      }).addTo(map)

      setRoute(newRoute)



    


      let southWest = L.latLng(59.84660399, 30.29496392),
      northEast = L.latLng(59.82934196, 30.82423701),
      bounds = L.latLngBounds(southWest, northEast);
      map.panInsideBounds(bounds);
    


    }
  }, [polylineData, map]);

  return <div id='map' />;
};

export default LeafletMap;
