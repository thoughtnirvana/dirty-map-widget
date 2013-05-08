$(function(){
  var mockData =
    [{description: 'This is Camera-1', location: 'Nob Hill', action_url: '/cam1',
    price: '$7/day', latlong: [37.7930944, -122.4169949], img: 'cameras/cam1.jpg'},
    {description: 'Awesome Camera-2', location: 'Location-1', action_url: '/cam2',
    price: '$8/day', latlong: [37.792405, -122.416813], img: 'cameras/cam2.jpg'},
    {description: 'Wonderful Camera-3', location: 'Location-2', action_url: '/cam3',
    price: '$9/day', latlong: [37.790574, -122.409475], img: 'cameras/cam3.jpeg'},
    {description: '13px Camera-4', location: 'Location-3', action_url: '/cam4',
    price: '$5/day', latlong: [37.792829, -122.424456], img: 'cameras/cam4.jpeg'},
    {description: 'Optic Zoom Camera-5', location: 'Location-4', action_url: '/cam5',
    price: '$11/day', latlong: [37.79032, -122.426877], img: 'cameras/cam5.jpeg'},
    {description: 'My Camera-6', location: 'Location-5', action_url: '/cam6',
    price: '$6/day', latlong: [37.799883, -122.416792], img: 'cameras/cam6.jpg'},
    {description: 'Get the Camera-7', location: 'Location-6', action_url: '/cam7',
    price: '$13/day', latlong: [37.798357, -122.421641], img: 'cameras/cam7.jpg'}]

  $("#map-canvas").mapList(mockData);
});
