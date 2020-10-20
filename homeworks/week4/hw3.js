const request = require('request');
const process = require('process');

const askCountryName = () => {
  if (!process.argv[2]) {
    return console.log('請輸入國家名稱');
  }
  return '請輸入國家名稱';
};
askCountryName();
request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
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
    if (data.message === 'Not Found') {
      console.log('找不到國家資訊');
    }
    for (let i = 0; i < data.length; i += 1) {
      console.log(
        `
          ============
          國家：${data[i].name}
          首都：${data[i].capital}
          貨幣：${data[i].currencies[0].code}
          國碼：${data[i].callingCodes}
        `,
      );
    }
    return data;
  },
);
