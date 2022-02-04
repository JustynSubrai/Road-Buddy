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