# Assuming that jQuery is loaded in the application

$.fn.extend
  mapList: (data) ->
    if $("#map-widget-css").length == 0
      $('head').append("<link id='map-widget-css' rel='stylesheet' type='text/css' href='../widget/map_widget.css'>")
    this.css('margin-top', '2%')
    this.css('margin-left', '2%')
    this.css('height', '90%')
    this.css('width', '92%')
    this.css('padding', '1%')
    this.css('border-style', 'solid')
    this.css('border-color', 'gray')
    this.css('border-width', '1px')
    this.append("<div id='map-list'></div>")
    this.append("<div id='camera-list'></div>")
    cam_description_in_focus_color = 'white'
    cam_button_in_focus_background_color = '#F88017'
    cam_location_in_focus_color = '#38ACEC'
    cam_description_out_focus_color = '#1874CD'
    cam_button_out_focus_background_color = '#1874CD'
    cam_location_out_focus_color = 'darkgrey'
    infoWindow = new google.maps.InfoWindow({size: new google.maps.Size(50,50)})
    LatLng = new google.maps.LatLng(37.7930944, -122.4169949)
    mapOptions = {
      center: LatLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map($("#map-list")[0],
      mapOptions);
    bounds = new google.maps.LatLngBounds();
    marker_array = []
    for i in [0..data.length-1]
      infoHtml =
        "<div id='unique-#{i}' class='parent'><div class='left'>" +
        "<div class='left-background'><img height='75' width='75' class='cam-img' src=#{data[i].img}" +
        "></img><p class='cam-price'>#{data[i].price}" +
        "</p></div></div><div class='right'><p class='cam-description'>#{data[i].description}</p>" +
        "<p class='cam-location'>#{data[i].location}</p>" +
        "<a href=#{data[i].action_url}><button class='cam-button'>Rent</button></a></div></div>"
      $('#camera-list').append(infoHtml)
      infoWindowContent =
        "<p class='cam-description'>#{data[i].description}</p>" +
        "<p class='cam-location'>#{data[i].location}</p>" +
        "<p class='cam-price'>#{data[i].price}"
      pos = new google.maps.LatLng(data[i].latlong[0], data[i].latlong[1])
      marker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.DROP,
        title: data[i].location,
        class_name: data[i].action_url,
        unique_id: "unique-#{i}"
      })
      marker.setMap(map)
      google.maps.event.addListener(marker, 'click', ((marker,infoWindowContent,infoWindow) ->
        ->
          infoWindow.setContent(infoWindowContent)
          infoWindow.open(map,marker)
          for element in $("#camera-list")[0].getElementsByClassName('parent')
            do (element) ->
              fnout.call(element)
          fnover.call($("##{this.unique_id}")[0])
          $('#camera-list').animate({
            scrollTop: $("##{this.unique_id}").offset().top + 'px'
            }, 'fast')
          )(marker,infoWindowContent,infoWindow))
      marker_array.push(marker)
      bounds.extend(pos)
    map.fitBounds(bounds)

    fnover = ->
               $(this).css('background-color', '#1874CD')
               $(this.getElementsByClassName('cam-description')[0]).css('color', cam_description_in_focus_color)
               $(this.getElementsByClassName('cam-button')[0]).css('background-color', cam_button_in_focus_background_color)
               $(this.getElementsByClassName('cam-location')[0]).css('color', cam_location_in_focus_color)

    fnout = ->
              $(this).css('background-color', 'white')
              $(this.getElementsByClassName('cam-description')[0]).css('color', cam_description_out_focus_color)
              $(this.getElementsByClassName('cam-button')[0]).css('background-color', cam_button_out_focus_background_color)
              $(this.getElementsByClassName('cam-location')[0]).css('color', cam_location_out_focus_color)

    $('.parent').hover \
      (fnover),
      (fnout)

    $('.parent').click ->
      parent_id = this.id
      for i in marker_array
        if parent_id == i.unique_id
          google.maps.event.trigger( i ,'click')
          break

      fnover.call(this)
    return this


