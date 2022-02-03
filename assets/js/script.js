var key = config.secretKey;
fetch("https://api.yelp.com/v3/businesses/search?location=NYC", {
  "method": "GET",
  "headers": {
    "Authorization": "Bearer " + key
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});