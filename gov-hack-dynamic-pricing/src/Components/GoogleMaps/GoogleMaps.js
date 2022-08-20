import React from "react";
import GoogleMapReact from "google-map-react";

const createMarker = (title, loc, map, maps) => {
  let marker = new maps.Marker({
    map: map,
    position: loc,
    title: title,
  });

  let infowindow = new maps.InfoWindow();
  var content = "Estimated price: $5.50";

  infowindow.setContent(content);
  infowindow.open(map, marker);
};

const GoogleMaps = () => {
  const renderData = (map, maps) => {
    const origin = { lat: -35.32136672549283, lng: 149.08274085534114 };
    const destination = { lat: -35.29295605636897, lng: 149.19122481116483 };
    createMarker("hi", origin, map, maps);
    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDeKBe_ydvFE5CxGCnaBQSSU1vHnaOrVyU" }}
        defaultCenter={{ lat: -35.32136672549283, lng: 149.08274085534114 }}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderData(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
