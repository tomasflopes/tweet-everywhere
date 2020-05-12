const tt = require('./utils/config');
const readline = require('readline-sync');

const user = readline.question("Insert the @ of the person: ").trim();

const params = {
  screen_name: user,
}

tt.get('statuses/user_timeline', params, (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});
