## 請解釋後端與前端的差異。

最簡易的差異是：前端是處理我們平常看到的網頁畫面，後端則是在畫面出現之前資料在處理的部分

以圖示來說明：
![](https://i.imgur.com/QvATupI.png)

前端就是處理瀏覽器到運作系統到硬體（網路卡）發送 request 給 server 以及硬體（網路卡）收到 server 的 response 到運作系統到瀏覽器後將資訊解析成畫面這段過程，後端則是處理 server 和 database 的溝通，以及 server 回傳 response 給瀏覽器這段

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
從 google 瀏覽器到運作系統到硬體（網路卡）先向 DNS 伺服器取得 IP 位址，再向此 IP 的 server 發送 javascript 關鍵字 request 給 server ，server 從資料庫用搜尋演算法找到與 javascript 相關性高的資料，將這些資料回傳給 server ，server 處理這些資料後再回傳 response 給電腦/手機硬體（網路卡）到運作系統到 google 瀏覽器，瀏覽器將資訊解析成畫面，看到搜尋結果


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `control（＾） + c `: 終止運作中的指令
2. `head`：預設只列出檔案最前面 10 行，`tail`：預設只列出檔案最後面 10 行，用法和 `cat` 一樣，後面接檔案名
3. `file`: `file 檔案名稱`，可以知道檔案的格式，例如：輸入`file test.txt` 會出現 `test.txt: UTF-8 Unicode text` 顯示是文字檔

