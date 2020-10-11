const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    try {
      const json = JSON.parse(body);
      for (let i = 0; i < json.length; i += 1) {
        console.log(`${json[i].id}  ${json[i].name}`);
      }
    } catch (e) {
      console.log(e); // 若回傳不是 JSON 格式字串就印出來
    }
  },
);
