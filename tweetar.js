const tt = require('./utils/config');
const readline = require('readline-sync');

const tweet = readline.question("Your tweet: ").trim();

const params = {
  status: tweet,
  lat: 48.9986053,
  long: 28.5313095,
  display_coordinates: true,
}

tt.post('statuses/update', params, (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});
