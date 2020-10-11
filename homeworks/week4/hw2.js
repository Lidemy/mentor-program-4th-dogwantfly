const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
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
}
if (process.argv[2] === 'read') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      try {
        const json = JSON.parse(body);
        const id = Number(process.argv[3]) - 1;
        console.log(json[id].name);
      } catch (e) {
        console.log(e); // 若回傳不是 JSON 格式字串就印出來
      }
    },
  );
}
if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log('刪除成功');
      }
    },
  );
}
if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log('新增成功');
        try {
          let json = JSON.parse(body);
          request(
            `https://lidemy-book-store.herokuapp.com/books/${json.id}}`,
            () => {
              try {
                json = JSON.parse(body);
                console.log(`${json.id}  ${json.name}`);
              } catch (e) {
                console.log(e); // 若回傳不是 JSON 格式字串就印出來
              }
            },
          );
        } catch (e) {
          console.log(e); // 若回傳不是 JSON 格式字串就印出來
        }
      } else {
        console.log('新增失敗');
      }
    },
  );
}
if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log('更改成功');
        try {
          let json = JSON.parse(body);
          request(
            `https://lidemy-book-store.herokuapp.com/books/${json.id}}`,
            () => {
              try {
                json = JSON.parse(body);
                console.log(`${json.id}  ${json.name}`);
              } catch (e) {
                console.log(e); // 若回傳不是 JSON 格式字串就印出來
              }
            },
          );
        } catch (e) {
          console.log(e); // 若回傳不是 JSON 格式字串就印出來
        }
      } else {
        console.log('更改失敗');
      }
    },
  );
}
