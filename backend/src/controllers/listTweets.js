const twitter = require('twitter');

async function listTweets(request, response) {
  const { token, secret } = request.params;

  const tt = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: token,
    access_token_secret: secret
  });

  tt.get('statuses/user_timeline', (error, data) => {
    if (!error) return response.json(data);

    return response.json(error);
  });
}

module.exports = listTweets;
