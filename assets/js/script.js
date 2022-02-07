
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


    
    console.log(response);
    document.querySelector("#testText").innerHTML = response.businesses[0].name
    document.querySelector("#testImage").setAttribute("src", response.businesses[0].image_url)
  })
  .catch(err => {
    console.error(err);
  });
}
// var key = process.env.key


// Fetch opentripmap below

// fetch ('https://api.opentripmap.com/0.1/en/places/geoname?name=Westwood&country=us&apikey=5ae2e3f221c38a28845f05b65aa94ae67c8a988c80831bd867503215') 
//     .then(response => response.json())
//     .then(data => {



//         console.log(data)
//         console.log(data.lat)
//     })
