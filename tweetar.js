const tt = new twitter(settings);
const readline = require('readline-sync');

const tweet = readline.question("Your tweet: ").trim();

const params = {
  status: tweet,
  lat: 6.9815218,
  long: 20.8926387,
  display_coordinates: true,
}

tt.post('statuses/update', params, (error, data, response) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});
