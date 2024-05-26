import React, { memo } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useBreakpointValue } from "@chakra-ui/react";

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
];

const nonce = "fixed-nonce-value"; //

const Map = () => {
  const [map, setMap] = React.useState(null);
  const isMdUp = useBreakpointValue({ base: false, md: true });

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
          height: isMdUp ? "200px" : "200px",
        }}
        center={center}
        // zoom 設定最大
        zoom={10}
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
