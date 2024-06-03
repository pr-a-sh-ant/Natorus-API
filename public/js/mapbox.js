/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

const map = new maplibregl.Map({
  container: 'map',
  style:
    'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  scrollZoom: false,
  zoom: 6,
});

const bounds = new maplibregl.LngLatBounds();

locations.forEach((loc) => {
  //add marker
  const el = document.createElement('div');
  el.classList.add('marker');

  new maplibregl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  //Add popup
  new maplibregl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
