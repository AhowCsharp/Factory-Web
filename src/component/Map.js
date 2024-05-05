import React, { memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 24.6471878,
  lng: 120.9529663,
};

const locations = [
  {
    lat: 24.6471878,
    lng: 120.9529663,
    label: "寰宇食品加工廠",
  },
  // 列出 日本、加拿大、澳洲、新加坡、香港、巴西、泰國、印尼 的經緯度
  { lat: 36.2048, lng: 138.2529, label: "日本" },
  { lat: 56.1304, lng: -106.3468, label: "加拿大" },
  { lat: -25.2744, lng: 133.7751, label: "澳洲" },
  { lat: 1.3521, lng: 103.8198, label: "新加坡" },
  { lat: 22.3193, lng: 114.1694, label: "香港" },
  { lat: -14.235, lng: -51.9253, label: "巴西" },
  { lat: 15.87, lng: 100.9925, label: "泰國" },
  { lat: -0.7893, lng: 113.9213, label: "印尼" },
];

const Map = ({ nonce }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAb3wkAlz_HRM4h57tO1ITCtvwyH-BlGSM",
    nonce,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "400px",
      }}
      center={center}
      // zoom 設定最大
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {locations.map((location, idx) => (
        <Marker key={idx} position={location} label={location.label} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
