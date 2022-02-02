fetch("https://yelp-graphql1.p.rapidapi.com/v3/graphql", {
	"method": "POST",
	"headers": {
		"authorization": "undefined",
		"x-rapidapi-host": "yelp-graphql1.p.rapidapi.com",
		"x-rapidapi-key":"KNsw6f40rp6KOffo_dCp8eigMhvJoLHN6AtO6ck5fSBB6_w12JDEdgaZo6_wiEyhyd1Y54ge3LdmdKA754oeR14rjKE2_PzZwnWmtj5VPk0nl1iTxNBhKDdrerv4YXYx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});