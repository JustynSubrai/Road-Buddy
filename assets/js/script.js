fetch("https://yelp-graphql1.p.rapidapi.com/v3/graphql", {
	"method": "POST",
	"headers": {
		"authorization": "undefined",
		"x-rapidapi-host": "yelp-graphql1.p.rapidapi.com",
		"x-rapidapi-key":"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});