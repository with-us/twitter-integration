var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '9ZKPH32Np09KdgLDzvcKqXA8V',
  consumer_secret: 'eekrVEkp7eOyD8oSncxobO4T6fkBPeMhDYmg01LPHfYmSOnZss',
  access_token_key: "825868212201885696-LsY6loh9QmX4xXnqgAzxBeJt44CS2Vg",
  access_token_secret: "A3wwQJzx85yCQlhM2Xisg3iUvHBZn3M2Rtb7fKl75wnUQ"
});

client.post('statuses/update', {status: 'Twitter API test'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
