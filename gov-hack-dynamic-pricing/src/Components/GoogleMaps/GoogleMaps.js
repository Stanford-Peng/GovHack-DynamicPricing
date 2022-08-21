import React from "react";
import GoogleMapReact from "google-map-react";

const createMarker = (title, loc, map, maps) => {
  let marker = new maps.Marker({
    map: map,
    position: loc,
    title: title,
  });

  let infowindow = new maps.InfoWindow();
  var content =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Journey Details</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Estimated Price:</b> $5.50</p>" +
    "<p><b>Live Occupany Rate:</b> Crowded <img src='/people-group-solid.svg' width='20px' height='20px'/>" +
    "<p> <b>Bus Arrival Time:</b> 22nd Aug 2020, 7:30PM</p>" +
    "</div>" +
    "</div>";

  infowindow.setContent(content);
  infowindow.open(map, marker);
};

const createMarker2 = (title, loc, map, maps) => {
  let marker = new maps.Marker({
    map: map,
    position: loc,
    title: title,
  });

  let infowindow = new maps.InfoWindow();
  var content =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Journey Details</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Estimated Price:</b> $3.50</p>" +
    "<p><b>Live Occupany Rate:</b> Less Crowded <img src='/person-solid.svg' width='20px' height='20px'/>" +
    "<p> <b>Bus Arrival Time:</b> 22nd Aug 2020, 6:45PM</p>" +
    "</div>" +
    "</div>";

  infowindow.setContent(content);
  infowindow.open(map, marker);
};
const GoogleMaps = () => {
  const renderData = (map, maps) => {
    const origin = { lat: -35.30212433268449, lng: 149.12670078481176 };
    const destination = { lat: -35.319461159869185, lng: 149.14004672011106 };
    const origin2 = { lat: -35.313676678347434, lng: 149.13304937068114 };
    createMarker("hi", origin, map, maps);
    const directionsService = new maps.DirectionsService();
    // const directionsRenderer = new maps.DirectionsRenderer();
    // directionsRenderer.setMap(map);
    createMarker2("hi", origin2, map, maps);

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: maps.TravelMode.TRANSIT,
        transitOptions: {
          departureTime: new Date(),
          modes: ["BUS"],
        },
        provideRouteAlternatives: true,
      },
      (result, status) => {
        console.log(result);
        if (status === maps.DirectionsStatus.OK) {
          for (var i = 0, len = result.routes.length; i < len; i++) {
            new maps.DirectionsRenderer({
              map: map,
              directions: result,
              routeIndex: i,
            });
          }
          //directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Add your Google API Key Here
        defaultCenter={{ lat: -35.30212433268449, lng: 149.12670078481176 }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderData(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
