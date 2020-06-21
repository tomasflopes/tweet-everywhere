async function dm(request, response) {
  const { message } = request.body;
  const id = require('./findId');

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
}

module.exports = dm;
