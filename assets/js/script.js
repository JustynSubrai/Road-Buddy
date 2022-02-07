
function thing() {
  console.log(document.querySelector("#thing").value)
  fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + document.querySelector("#thing").value, {
    "method": "GET",
    "headers": {
      "Authorization": "Bearer W4S7TecUBgIRXsrzLF-Y1aMW4KebkqjTiWx8-IlN3jZ0tzA78-d6cNaoXAzHecWreYhXOR1akdRUWwQVTMGe8VfJhj-5c0Z9l9yGo4H0QcIGjlH9RPVNRi_45UX7YXYx"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(response => {
    let lat = response.businesses[0].coordinates.latitude
    let long = response.businesses[0].coordinates.longitude
    let map = L.map('map').setView([lat, long], 20);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoianN1YnJhaSIsImEiOiJja3piejB6czMyYTA1MnlwcjJmaXljdGNmIn0.Ukuvh6H-szz9m6G8cAamQQ'
  }).addTo(map);

    console.log(lat)
    console.log(long)
    console.log(response);
    document.querySelector("#testText").innerHTML = response.businesses[0].name
    document.querySelector("#testImage").setAttribute("src", response.businesses[0].image_url)
  })
  .catch(err => {
    console.error(err);
  });
}


// Fetch opentripmap below
// fetch ('https://api.opentripmap.com/0.1/­en/tiles/pois­/10­/1/1.pbf&apikey=5ae2e3f221c38a28845f05b65aa94ae67c8a988c80831bd867503215') 
//     .then(response => response.json())
//     .then(data => {



//         console.log(data)
//         // console.log(data.lat)
//     })


// https://api.opentripmap.com/0.1/­{lang}­/tiles/{layer}­/{z}­/{x}­/{y}.pbf?kinds={kinds}&rate={rate}&apikey={apikey}
