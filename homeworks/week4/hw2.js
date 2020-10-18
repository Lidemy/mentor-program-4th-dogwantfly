const request = require('request');
const process = require('process');

const action = process.argv[2];
const params = process.argv[3];

const listBooks = () => {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
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
      return data;
    },
  );
};
const readBook = (id) => {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
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
      console.log(data.name);
      return data;
    },
  );
};
const deleteBook = (id) => {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error, response, body) => {
      if (error) {
        return console.log('刪除失敗', error);
      }
      console.log('刪除成功');
      return body;
    },
  );
};
const createBook = (name) => {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name,
      },
    },
    (error, response, body) => {
      if (error) {
        return console.log('新增失敗', error);
      }
      console.log('新增成功');
      let data;
      try {
        data = JSON.parse(body);
      } catch (err) {
        console.log(err);
        return err;
      }
      console.log(`${data.id} ${data.name}`);
      return data;
    },
  );
};
const updateBook = (id, bookName) => {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: bookName,
      },
    },
    (error, response, body) => {
      if (error) {
        return console.log('更改失敗', error);
      }
      console.log('更改成功');
      let data;
      try {
        data = JSON.parse(body);
      } catch (err) {
        console.log(err);
        return err;
      }
      console.log(`${data.id}  ${data.name}`);
      return data;
    },
  );
};
switch (action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  case 'create':
    createBook(params);
    break;
  case 'update':
    updateBook(params, process.argv[4]);
    break;
  default:
    console.log('Available commands: list, read, delete, create and update');
}
