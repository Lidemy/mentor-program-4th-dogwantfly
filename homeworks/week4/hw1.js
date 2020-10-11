const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) {
      return console.log('抓取失敗', error);
    }
    let data;
    try {
      data = JSON.parse(body);
    } catch (err) {
      console.log(err);
      return err;
    }
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id}  ${data[i].name}`);
    }
    return body;
  },
);
