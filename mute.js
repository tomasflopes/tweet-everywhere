const tt = require('./utils/config');
const readline = require('readline-sync');

const userToMute = readline.question("Insert the @ of the user that you want to mute: ").trim().toLowerCase();

const params = {
  screen_name: userToMute,
}

tt.post('mutes/users/create', params, (error, data) => {
  if (!error) {
    console.log(`${data.name} was muted!`);
  } else {
    console.log(error);
  }
});
