import LeafletRoutingMachine from "./RoutingMachine";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const MainMap = () => {
  const position = [59.57, 30.19];

  return (
    <>
      <Map center={position} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <LeafletRoutingMachine />
      </Map>
    </>
  );
};

export default MainMap;
