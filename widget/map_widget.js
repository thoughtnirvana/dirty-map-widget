// Generated by CoffeeScript 1.4.0
(function() {

  $.fn.extend({
    mapList: function(data) {
      var LatLng, bounds, fnout, fnover, i, infoHtml, infoWindow, infoWindowContent, map, mapOptions, marker, marker_array, pos, _i, _ref;
      if ($("#map-widget-css").length === 0) {
        $('head').append("<link id='map-widget-css' rel='stylesheet' type='text/css' href='../widget/map_widget.css'>");
      }
      this.css('margin-top', '2%');
      this.css('margin-left', '2%');
      this.css('height', '90%');
      this.css('width', '92%');
      this.css('padding', '1%');
      this.css('border-style', 'solid');
      this.css('border-color', 'gray');
      this.css('border-width', '1px');
      this.append("<div id='map-list'></div>");
      this.append("<div id='camera-list'></div>");
      infoWindow = new google.maps.InfoWindow({
        size: new google.maps.Size(50, 50)
      });
      LatLng = new google.maps.LatLng(37.7930944, -122.4169949);
      mapOptions = {
        center: LatLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map($("#map-list")[0], mapOptions);
      bounds = new google.maps.LatLngBounds();
      marker_array = [];
      for (i = _i = 0, _ref = data.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        infoHtml = ("<div id='unique-" + i + "' class='parent'><div class='left'>") + ("<div class='left-background'><img height='75' width='75' class='cam-img' src=" + data[i].img) + ("></img><p class='cam-price'>" + data[i].price) + ("</p></div></div><div class='right'><p class='cam-description'>" + data[i].description + "</p>") + ("<p class='cam-location'>" + data[i].location + "</p>") + ("<a href=" + data[i].action_url + "><button class='cam-button'>Rent</button></a></div></div>");
        $('#camera-list').append(infoHtml);
        infoWindowContent = ("<p class='cam-description'>" + data[i].description + "</p>") + ("<p class='cam-location'>" + data[i].location + "</p>") + ("<p class='cam-price'>" + data[i].price);
        pos = new google.maps.LatLng(data[i].latlong[0], data[i].latlong[1]);
        marker = new google.maps.Marker({
          position: pos,
          animation: google.maps.Animation.DROP,
          title: data[i].location,
          class_name: data[i].action_url,
          unique_id: "unique-" + i
        });
        marker.setMap(map);
        google.maps.event.addListener(marker, 'click', (function(marker, infoWindowContent, infoWindow) {
          return function() {
            var element, _fn, _j, _len, _ref1;
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker);
            _ref1 = $("#camera-list")[0].getElementsByClassName('parent');
            _fn = function(element) {
              return fnout.call(element);
            };
            for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
              element = _ref1[_j];
              _fn(element);
            }
            fnover.call($("#" + this.unique_id)[0]);
            return $('#camera-list').animate({
              scrollTop: $("#" + this.unique_id).offset().top + 'px'
            }, 'fast');
          };
        })(marker, infoWindowContent, infoWindow));
        marker_array.push(marker);
        bounds.extend(pos);
      }
      map.fitBounds(bounds);
      fnover = function() {
        $(this).css('background-color', '#1874CD');
        $(this.getElementsByClassName('cam-description')[0]).css('color', 'white');
        $(this.getElementsByClassName('cam-button')[0]).css('background-color', '#F88017');
        return $(this.getElementsByClassName('cam-location')[0]).css('color', '#38ACEC');
      };
      fnout = function() {
        $(this).css('background-color', 'white');
        $(this.getElementsByClassName('cam-description')[0]).css('color', '#1874CD');
        $(this.getElementsByClassName('cam-button')[0]).css('background-color', '#1874CD');
        return $(this.getElementsByClassName('cam-location')[0]).css('color', 'darkgrey');
      };
      $('.parent').hover(fnover, fnout);
      $('.parent').click(function() {
        var parent_id, _j, _len;
        parent_id = this.id;
        for (_j = 0, _len = marker_array.length; _j < _len; _j++) {
          i = marker_array[_j];
          if (parent_id === i.unique_id) {
            google.maps.event.trigger(i, 'click');
            break;
          }
        }
        return fnover.call(this);
      });
      return this;
    }
  });

}).call(this);
