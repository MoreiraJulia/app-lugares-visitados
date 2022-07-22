// // Função para buscar a localidade
function PegarPosicao() {

    var longitude = document.getElementById("longitude").value;
    var latitude = document.getElementById("latitude").value;

    console.log(longitude, latitude);

      var options = {
          enableHighAccuracy: true,
          maximumAge: 3600000
      }

       var watchID = navigator.geolocation.getCurrentPosition(Sucesso, Erro, options);
      function Sucesso(position) {
          alert('Longitude: ' + longitude + '\n' + 'Latitude: ' + latitude);
          alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: '  + position.coords.longitude);

         //  var longitude = position.coords.longitude;
         //  var longitude = document.getElementById("longitude");
        //  var latitude = position.coords.latitude;
        //  var latitude = document.get;

          var latLong = new google.maps.LatLng(latitude, longitude);

          // Pega a latitude e longitude
         //  var latLong = new google.maps.LatLng(-22.7565068, -47.3217348);

         //  var latLong2 = new google.maps.LatLng(-22.7525479, -47.329845);
          console.log(latitude, longitude)

          var mapOptions = {
              center: latLong,
              zoom: 20,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    

          // Pega as localidades e repete
          new google.maps.Marker( 
              {
             position: latLong,
              map: map,
              title: 'my location'
              }
          );
         //  new google.maps.Marker( 
         //      {
         //      position: latLong2,
         //      map: map,
         //      title: 'my location'
         //      }
         //  );
      };
      function Erro(error) {
          alert('codigo: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
     }
   }

// Função para buscar a localidade

// function PegarPosicao() {
//     var options = {
//         enableHighAccuracy: true,
//         maximumAge: 3600000
//     }
//     // var watchID = navigator.geolocation.getCurrentPosition(Sucesso, Erro, options);
//     function Sucesso(position) {
//         // alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: '  + position.coords.longitude);
//         var longitude = position.coords.longitude;
//         var latitude = position.coords.latitude;
//         // var latLong = new google.maps.LatLng(latitude, longitude);

//         // Pega a latitude e longitude
//         var latLong = new google.maps.LatLng(latitude, longitude);

//         // var latLong2 = new google.maps.LatLng(-22.7525479, -47.329845);
//         console.log(latitude, longitude)

//         var mapOptions = {
//             center: latLong,
//             zoom: 20,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
        

//         // Pega as localidades e repete
//         new google.maps.Marker( 
//             {
//             position: latLong,
//             map: map,
//             title: 'my location'
//             }
//         );
//         new google.maps.Marker( 
//             {
//             position: latLong2,
//             map: map,
//             title: 'my location'
//             }
//         );
//     };
//     function Erro(error) {
//         alert('codigo: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
//     }
//  }