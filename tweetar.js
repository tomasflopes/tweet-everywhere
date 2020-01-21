const tt = require('./utils/config');
const readline = require('readline-sync');

const tweet = readline.question("Your tweet: ").trim();

const params = {
  status: tweet,
  lat: 38.8727141,
  long: -9.078514,
  display_coordinates: true,
}

tt.post('statuses/update', params, (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});
