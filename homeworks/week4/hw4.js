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
    const json = JSON.parse(body);
    for (let i = 0; i < json.top.length; i += 1) {
      console.log(
        `${json.top[i].viewers}  ${json.top[i].game.name}`,
      );
    }
  },
);
