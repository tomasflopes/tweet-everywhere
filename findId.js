const tt = require('./utils/config');
const readline = require('readline-sync');

const user = readline.question("Insert the @ that the user that you want to DM: ").trim().toLowerCase();

const params = {
  screen_name: user,
}

tt.get('users/lookup', params, async (error, data) => {
  if (!error) {
    module.exports = data[0].id;
  } else {
    console.log(error);
  }
});
