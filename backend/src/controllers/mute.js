
async function mute(request, response) {
  const { userToMute } = request.body;

  const params = {
    screen_name: userToMute,
  }

  tt.post('mutes/users/create', params, (error, data) => {
    if (!error) {
      return response.json({ Message: `${data.name} was muted!` });
    } else {
      return response.status(400).json(error);
    }
  });
}

module.exports = mute;
