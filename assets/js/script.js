fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=NYC", {
  "method": "GET",
  "headers": {
    "Authorization": "Bearer ",
  }
})
.then(response => {
  return response.json();
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

// Fetch opentripmap below

fetch ('https://api.opentripmap.com/0.1/en/places/geoname?name=Westwood&country=us&apikey=5ae2e3f221c38a28845f05b65aa94ae67c8a988c80831bd867503215') 
    .then(response => response.json())
    .then(data => {
        console.log(data.lon)
        console.log(data.lat)
    })
