let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.73228713768685,  lng: -84.13654349703785, },
    zoom: 18,
  });
}

window.initMap = initMap;