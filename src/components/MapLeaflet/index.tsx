import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./style.css";
import type { IFetchedUser } from "../../types/fetchedUsers.interface";
import PopupMap from "../PopupMap";
//icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,       
  iconRetinaUrl: markerIcon2x, 
  shadowUrl: markerShadow,     
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

type Props = {
  filteredUsers: IFetchedUser[]
}

const MapLeaflet:React.FC<Props> = ({filteredUsers}) => {
  
  return (
    <div>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={(cluster: L.MarkerCluster) => {
            const count = cluster.getChildCount();
            return L.divIcon({
              html: `<div>${count}</div>`,
              className: "marker-cluster",
              iconSize: L.point(40, 40),
            });
          }}
        >
          {filteredUsers.map((user) => (
            <Marker
              key={user.id}
              position={[user.location.lat, user.location.lon]}
              icon={DefaultIcon}
            >
              <Popup>
                <PopupMap user={user}/>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
