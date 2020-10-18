const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      'Client-ID': 'wtfcdoaxs96mdv104k2qkd3e3idrfz',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  },
  (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    let data;
    try {
      data = JSON.parse(body);
    } catch (err) {
      console.log(err);
      return err;
    }
    for (let i = 0; i < data.top.length; i += 1) {
      console.log(
        `${data.top[i].viewers}  ${data.top[i].game.name}`,
      );
    }
    return data;
  },
);
