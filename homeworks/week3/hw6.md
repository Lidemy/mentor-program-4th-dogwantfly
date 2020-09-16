## hw1：好多星星
這題因為很像 JS 101 題目練習 Lv1 的印出 n 個 *，因此直接參考那題的做法做出重複字元
```
function solve(lines){
    for (let i = 1; i <= Number(lines[0]); i++){
       star('*',i)
   }
   function star(str,n){
        let result = '';
        for(var i=1;i<=n;i++){
            result += str;        
        }
        console.log(result) 
    };
};
```
但一開始練習 JS 101 的印出 n 個 * 時，想到的方法是把 * 推到陣列中再用 join() 合起來，一個比較麻煩的做法 XD
```
function star(n){
  var result = [];
  for(var i=1;i<=n;i++){
    result.push('*');          
  }
  console.log(result.join('')); 
};
star(10);
```
## hw2：水仙花數

這題一開始直覺就是想到把數字都轉成字串來取字元
```
function solve(lines){
    let temp = lines[0].split(' ')
    let min = Number(temp[0])
    let max = Number(temp[1])
    let num = 0
    let ans = 0
    for (let j=min; j<=max; j++) {
        str = j.toString()
        num = str.length
        ans = 0
        for (let i=0; i<Number(num); i++){
            ans += Number(str[i])**Number(num)
        }
        if(ans === j){
            console.log(ans)
        }
    }
};
```
看過參考解答影片後才瞭解得出數字的位數和數字的每個位數都建議使用數學的方法，後來練習的很多題目也用到幾次取餘數的方法，如果沒有解題真的已經忘記餘數這回事了 🤣





## hw3：判斷質數

這題在 ALG 101 第四章有看過老師用這題示範虛擬碼，所以知道要用取餘數來判斷是否為質數，一開始寫的版本是把 1 和 ２ 的情況另外寫：如果是 1 就印出 ‘Composite’，2 就印出 ‘Prime’，看完影片才發現 2 可以不用獨立出來，自己寫的版本執行時間好像變多了

在實作 isPrime function 時原本真的把最後的 return true 放在 for 迴圈中，接在 if 後面，輸出結果 9 居然是質數，後來一行行去看才發現執行到 if 時會先從 2 開始判斷，9 / 2 不整除，因此就跳到 true 了，最後知道要把 return true 放到迴圈外才正確

## hw4：判斷迴文

這題好像在 JS101 也有練習過，因此知道使用迴圈倒著印出字串，再和原本的字串比較是否相等，因此解題比較順

## hw5：聯誼順序比大小

這題是卡最久的，因為一開始不知道怎麼處理超過數字範圍的部分，後來 google 才發現有 BigInt 這個型別，然後也有函式可以轉換，也有到 spectrum 看之前同學也卡同一題的發問，最後用 BigInt 比較數字才通過，後來看影片也嘗試用字串來比較，記得這題是最一開始在 Lidemy OJ 自己開始解的第一題，花了蠻久時間，從下午到晚上都在試 XD