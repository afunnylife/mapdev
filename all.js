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
    ['Bondi Beach', 25.0113176,121.5319803, 4, 'http://www.google.com'],
    ['Coogee Beach', 25.0112895,121.5290922, 5, 'http://microsoft.com'],
    ['Cronulla Beach', 25.0084769,121.5325831, 3, 'http://www.apple.com'],
   // ['Manly Beach', 25.0113176,121.5319803, 2, 'http://www.facebook.com'],
   // ['Maroubra Beach', 25.0113140,121.5319850, 1, 'http://www.twitter.com']
];
var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(25.0113176,121.5319803),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });



    var icon = {
        url: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.0-9/11709845_10207068161571140_4922252261826117643_n.jpg?_nc_cat=108&oh=d7d77b063969f61c36d8494c07999e00&oe=5C5DFB03', // url
        scaledSize: new google.maps.Size(60, 50), // scaled size
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



