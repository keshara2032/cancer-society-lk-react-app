import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'





const Map = () => {
    
const defaultProps = {
    center: {
        lat:7.287,
        lng:80.633,
    },
    zoom: 16,

    marker: {
        lat:7.28755,
        lng:80.63304,
    }
  };

    return (
        <div >
            <MapContainer center={[defaultProps.center.lat,defaultProps.center.lng]} zoom={defaultProps.zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[defaultProps.marker.lat,defaultProps.marker.lng]}>
                <Popup>
                Cancer Home Kandy
                </Popup>
            </Marker>
            </MapContainer>            
        </div>
    )
}

export default Map
