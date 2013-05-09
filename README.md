dirty-map-widget
================

A jQuery extension function which takes a list of items and locations in json and displays it on map


Usage -

    data =
    [{location: 'Location-0', action_url: '#', price: '$7/day', latlong: [37.7930944, -122.4169949]},
    {location: 'Location-1', action_url: '#', price: '$8/day', latlong: [37.792405, -122.416813]},
    {location: 'Location-2', action_url: '#', price: '$9/day', latlong: [37.790574, -122.409475]}]

    <html>
      div id="foobar"
    </html>

    $("#foobar").mapList(data);

Or

    %ul#gear-near-you
      %li{ data: {location: 'Nob Hill',
                  action_url: '/cam1',
                  price: '$7/day',
                  latlong: [37.7930944, -122.4169949],
                  img: 'cameras/cam1.jpg'}}
        %a(href='#') Canon 60D

      %li{ data: {location: 'Location-1',
                  action_url: '/cam2',
                  price: '$8/day',
                  latlong: [37.792405, -122.416813],
                  img: 'cameras/cam2.jpg'}}
        %a(href='#') Awesome Camera-2

    $("#gear-near-you").mapList();
