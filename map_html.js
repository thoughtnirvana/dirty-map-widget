$(function(){
  var mockData =
    [{location: 'Nob Hill', action_url: '#', price: '$7/day', latlong: [37.7930944, -122.4169949]},
     {location: 'Location-1', action_url: '#', price: '$8/day', latlong: [37.792405, -122.416813]},
     {location: 'Location-2', action_url: '#', price: '$9/day', latlong: [37.790574, -122.409475]},
     {location: 'Location-3', action_url: '#', price: '$5/day', latlong: [37.792829, -122.424456]},
     {location: 'Location-4', action_url: '#', price: '$11/day', latlong: [37.79032, -122.426877]},
     {location: 'Location-5', action_url: '#', price: '$6/day', latlong: [37.799883, -122.416792]},
     {location: 'Location-6', action_url: '#', price: '$13/day', latlong: [37.798357, -122.421641]}]

  $("#map-canvas").mapList(mockData);
});
