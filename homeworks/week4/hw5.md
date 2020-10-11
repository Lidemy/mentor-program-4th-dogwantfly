## 請以自己的話解釋 API 是什麼

API 全名為 Application Programming Interface，應用程式介面，在本質上，他是一個可以讓大家用來「交換資料」的「介面」，提供 API 的人就是提供一個介面 (Interface)，讓其他人可以來使用它的資料，或者說使用它的功能，例如新增、刪除資料
使用 API 的人，可以取得他人的資料，使用提供者提供的功能

使用 API 交換資料有幾個特點：
- 提供資料（或功能）者可以決定自己要提供的東西，像是販賣機可以販賣自己想販賣的東西，因為是機器，因此也無法像服務人員一樣，可以要求一些客製化的東西，賣飲料就只能提供單純的飲料，無法像手搖飲一樣要求糖和冰的量，因此提供者可以決定自己要提供什麼樣的資料，以及不提供什麼資料
- 交換資料可粗略分成不透過網路與透過網路，目前較常碰到的是透過網路使用的 API，稱為 Web API 或 HTTP API，因大多數透過網路的 API 是使用 HTTP 的方式（透過發 request 和接收 response 的動作） 來交換資料；不是透過網路的 API，例如作業系統的 API，我們都透過此 API 來讀取或存取檔案
- 使用 API 拿取資料，可以看著 API 文件獨立完成串接，不需太多人力，減少一些溝通障礙，不過前提是 API 文件內容說明完整


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

**403 Forbidden**

和 401 請求失敗類似，不過 403 狀態重新驗證身份也無效，伺服器有收到請求但拒絕提供服務，會接收到此狀態原因可能有：server 已設定存取權限，而使用者沒有此網站的權限，或是 server 在設定權限出現錯誤，讓原本應有權限的使用者無法有權限拜訪
此時可以嘗試重新整理頁面，因有時 403 錯誤是暫時的，或者可以檢查輸入的網址，也是常見造成 403 錯誤的原因之一，還有一種解決方式是清除瀏覽器的Cookie 和緩存，之前使用 zoom 時也有遇到 403 的錯誤，最後也是清除 Cookie 和緩存解決的

以上參考：https://www.howtogeek.com/357785/what-is-a-403-forbidden-error-and-how-can-i-fix-it/



**504 Gateway Time-out**

網路連線逾時，在網站載入的過程發生問題，沒有及時得到回應而超時，此時也可以嘗試重新整理頁面，因錯誤可能是暫時的，或是重新啟動網路設備
如果所有網路設備都有出現 504 錯誤，可以檢查 DNS Server，若嘗試過這些方法都無效，最後可聯絡該網站，也有可能是網站本身出了問題

參考：[504 Gateway Timeout Error (What It Is and How to Fix It)](https://www.lifewire.com/504-gateway-timeout-error-explained-2622941)



**205 Reset Content**

Server 已經完成請求，但不會回傳任何內容，需要重整發 request 出去的內容，重新輸入資料，例如重新輸入表單內容

參考 :

[mdn]( https://developer.cdn.mozilla.net/en-US/docs/Web/HTTP/Status/205)

[Was ist 205 Reset Content - Definition & Bedeutung - SEO united Glossar](https://www.seo-united.de/glossar/205-reset-content/)

[205 Reset Content | http  | API Mirror](https://apimirror.com/http/status/205)


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

參考作業中的 API 文件

Base URL: https://lidemy-restaurants-platform/

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取餐廳資訊 | GET    | `/restaurants`    | `_limit`:限制回傳資料數量           | `/restaurants?_limit=5` |
| 獲取單一餐廳資訊 | GET    | `/restaurants/id` | 無                    | `/restaurants/5`      |
| 新增餐廳  | POST   | `/restaurants`     | name:餐廳名稱 | 參考下方新增餐廳範例              |
| 刪除餐廳   | DELETE   | `/restaurants/id`     | 無 | `/restaurants/5`              |
| 更改餐廳資訊   | PATCH   | `/restaurants/id`    | name:餐廳名稱 | 參考下方更改餐廳範例              |

**範例：使用 request 和 process 套件新增餐廳**
```
const request = require('request'); 
const process = require('process');
request.post( 
     {
       url:'https://lidemy-restaurants-platform/',
        form: {
            'name':process.argv[2]
         },
     },
     function (error, response, body) {
       console.log(body);
   }
)
// 在 command line 輸入 node index.js '餐廳名稱'
```

**範例：使用 request 和 process 套件更改餐廳資訊**
```
const request = require('request'); 
const process = require('process');
request.patch( 
     {
       url:'https://lidemy-restaurants-platform/' + process.argv[2],
        form: {
            'name':process.argv[3]
         },
     },
     function (error, response, body) {
       console.log(body);
   }
)
// 在 command line 輸入 node index.js '要更改的餐廳名稱'
```
