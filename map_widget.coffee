# Assuming that jQuery is loaded in the application

$.fn.extend
  mapList: (data) ->
    this.append("<div id='map-list' style='height: 80%; width: 60%; float:left;'></div>")
    this.append("<div id='camera-list' style='width: 35%; float: right;'></div>")
    infoWindow = new google.maps.InfoWindow()
    LatLng = new google.maps.LatLng(37.7930944, -122.4169949)
    mapOptions = {
      center: LatLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map($("#map-list")[0],
      mapOptions);
    bounds = new google.maps.LatLngBounds();
    for i in [0..data.length-1]
      infoString = "<ul><li>Camera Location: #{data[i].location}</li><li>Price: #{data[i].price}</li></ul>"
      $('#camera-list').append(infoString)
      pos = new google.maps.LatLng(data[i].latlong[0], data[i].latlong[1])
      marker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.DROP,
        title: data[i].location
      })
      marker.setMap(map)
      google.maps.event.addListener(marker, 'click', ((marker,infoString,infoWindow) ->
        ->
          infoWindow.setContent(infoString)
          infoWindow.open(map,marker))(marker,infoString,infoWindow))
      bounds.extend(pos)
    map.fitBounds(bounds)
    return this


