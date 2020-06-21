const twitter = require('twitter');

const opencage = require('opencage-api-client');

async function tweetar(request, response) {
  const [, query] = request.headers.referer.split('/?');
  const [tokenValue, secretValue] = query.split('&');
  const [, token] = tokenValue.split('=');
  const [, secret] = secretValue.split('=');

  console.log(token, secret);

  const tt = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: token,
    access_token_secret: secret
  });

  const { tweet, spot } = request.body;

  const { results } = await opencage
    .geocode({ q: spot })
    .catch(error => {
      console.log('error', error.message);
    });

  const coords = {
    lat: results[0].geometry.lat,
    long: results[0].geometry.lng
  }

  const flag = results[0].annotations.flag;
  const cityName = results[0].formatted

  const params = {
    status: tweet,
    lat: coords.lat,
    long: coords.long,
    display_coordinates: true,
  }

  tt.post('statuses/update', params, (error, data) => {
    if (!error) {
      const values = {
        data,
        flag,
        cityName
      }

      return response.json(values);
    } else {
      return response.status(400).json(error);
    }
  });
}

module.exports = tweetar;
