import React, { memo } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

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
  { lat: 36.7783, lng: -119.4179, label: "外銷國家:美國" },
  { lat: 36.2048, lng: 138.2529, label: "外銷國家:日本" },
  { lat: -25.2744, lng: 133.7751, label: "外銷國家:澳洲" },
  { lat: 41.8719, lng: 12.5674, label: "外銷國家:義大利" },
  { lat: 51.1657, lng: 10.4515, label: "外銷國家:德國" },
  { lat: 22.3193, lng: 114.1694, label: "外銷國家:香港" },
  { lat: 12.8797, lng: 121.774, label: "外銷國家:菲律賓" },
  { lat: 4.2105, lng: 101.9758, label: "外銷國家:馬來西亞" },
  { lat: 14.0583, lng: 108.2772, label: "外銷國家:越南" },
  { lat: 56.1304, lng: -106.3468, label: "外銷國家:加拿大" },
  { lat: 9.082, lng: 8.6753, label: "外銷國家:非洲" },
  { lat: -14.235, lng: -51.9253, label: "外銷國家:巴西" },
  { lat: 15.87, lng: 100.9925, label: "外銷國家:泰國" },
  { lat: -0.7893, lng: 113.9213, label: "外銷國家:印尼" },
];

const Map = () => {
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

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
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
    </LoadScript>
  );
};

export default memo(Map);
