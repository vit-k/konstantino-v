//GOOGLE MAP

;(function ($) {

    $(function () {
        var map,
            point = {lat: 34.044061, lng: -118.424135};
        map = new google.maps.Map
        (document.getElementById('google'),
            {
                center: point,
                zoom: 9
        });

        var marker = new google.maps.Marker({
            position: {lat: 34.057146, lng: -118.2565935},
            map: map,
            animation: google.maps.Animation.DROP,
            icon: "bouncy-assets/marker.png"
        });
    });
})(jQuery);