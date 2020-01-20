const readline = require('readline-sync');

const id = require('./findId');

const message = readline.question("Insert the message that you want to send: ").trim();

const params = {
  type: 'message_create',
  message_create: {
    target: {
      recipient_id: id,
    },
    message_data: {
      text: message,
    },
  }
}

tt.post('direct_messages/events/new', params, (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});



