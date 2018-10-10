// var map;
// var marker;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: { lat: 22.59493325, lng: 120.3068658 }
//   });
//   var data = [
//     {
//       position: { lat: 22.592975, lng: 120.307146 },
//       map: map,
//       //title: '消防局'
//     },
//     {
//       position: { lat: 22.596805, lng: 120.304688 },
//       map: map,
//       //title: '加油站'
//     }
//   ];
//   for(var i = 0;data.length>i;i++){
//     var marker = new google.maps.Marker(data[i]);
//     console.log(marker);
//   }
// }


var locations = [
    ['Bondi Beach', -33.890542, 151.274856, 4, 'http://www.google.com'],
    ['Coogee Beach', -33.923036, 151.259052, 5, 'http://microsoft.com'],
    ['Cronulla Beach', -34.028249, 151.157507, 3, 'http://www.apple.com'],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2, 'http://www.facebook.com'],
    ['Maroubra Beach', -33.950198, 151.259302, 1, 'http://www.twitter.com']
];
var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });



    var icon = {
        url: 'https://brandmark.io/logo-rank/random/mcdonalds.png', // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };




    var num_markers = locations.length;
    for (var i = 0; i < num_markers; i++) {
        markers[i] = new google.maps.Marker({
            position: {
                lat: locations[i][1],
                lng: locations[i][2]
            },
            map: map,
            html: locations[i][0],
            url: locations[i][4],
            id: i,
            icon:icon,
        });

        google.maps.event.addListener(markers[i], 'click', function() {
            //window.location.href = this.url;
            //console.log(this.url)
    var marker = this

    if(marker.getAnimation()==null){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }else{
      marker.setAnimation(null);
    }




        });

        //console.log(markers[i].url);
    }

    console.log(markers);
}



