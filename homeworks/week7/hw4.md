## 什麼是 DOM？


DOM 的全名是  Document Object Modal，是一個將 HTML 結構（Document）轉為物件（Object）形式的模型，將 HTML 元素的階層用一個樹狀的結構呈現

瀏覽器提供 DOM 讓 JavaScript 可以透過 DOM 控制 HTML 元素（或稱節點 node）來讓網頁畫面變化，例如改變元素的樣式、在元素加上監聽器 (event listener）監聽事件

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

### 事件傳遞的順序：

事件會先由 DOM 的最上層：瀏覽器視窗 window 往下傳到 document、html、body，再依照元素的階層往下傳遞到最後的目標元素，到目標元素後，又會往上回傳到 window

例如：

```
<div class="outer-box">
    outer box
    <div class="inner-box"> 
        inner box
        <button class="btn">click me</button>
    </div>
</div>

```
當按下 click me，點擊事件傳遞順序就會是 window -> document -> html -> body -> .outer-box -> .inner-box -> .btn，再從 .btn 傳回 window

### 什麼是冒泡，什麼又是捕獲？

在事件傳遞機制中，由最上層 window 往下傳到目標元素的過程可以稱為捕獲階段，到了目標元素本身會稱為目標階段，從目標元素往上傳回 window 的過程稱為冒泡階段，因往上的過程像是泡泡冒上來水面一般，了解這三個階段可以在加上 event listener 時加在不同的階段可以因事件傳遞的階段不同做不同的處理

以上方的範例來說，從 window 到 .btn 就是捕獲階段，傳到 .btn 時是目標階段，從 .btn 到 window 是冒泡階段


## 什麼是 event delegation，為什麼我們需要它？

event delegation 中文為事件代理，概念是藉由事件傳遞順序會先從 window 傳到目標元素的捕獲階段，因此當目標元素是子元素，事件也會傳遞經過父元素觸發事件，會加在父元素的時機常是子元素數量眾多，或是需要動態新增子元素，若是在子元素加 event listener 監聽事件要一個一個加，若是動態新增就需要再新增時再執行加上 event listener 的動作，較沒效率，加在父元素就可以方便監聽所有子元素的事件


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`event.preventDefault()` 是取消事件的預設行為，但不會影響事件傳遞，常見用於 a 標籤，a 標籤的點擊事件預設會連結到其他頁面（若有設定 href 屬性），若取消事件預設行為，監聽 a 標籤的點擊事件，並在事件觸發實作其他動作，仍然會執行

參考於課程影片與 [Event.preventDefault()](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/preventDefault)

`event.stopPropagation()` 則是阻止事件傳遞的捕獲及冒泡階段，以上方的範例來說，若是在 .outer-box .inner-box .btn 都加上 event listener 在冒泡階段，並在 .btn 執行 event.stopPropagation()

```
<div class="outer-box">
    outer box
    <div class="inner-box"> 
        inner box
        <button class="btn">click me</button>
    </div>
</div>
```

```
function addEvent(className){
    document.querySelector(className).addEventListener('click', function(){
        console.log(className,'冒泡')
    })
}
addEvent('.outer-box')
addEvent('.inner-box')

document.querySelector('.btn').addEventListener('click', function(e){
	e.stopPropagation();
    console.log('.btn 冒泡')
})
```
當點擊 .outer-box 時會印出 `.outer-box 冒泡`，點擊 .inner-box 時會先印出 `.inner-box 冒泡` 再印出 `.outer-box 冒泡`，點擊 .btn 預期會是印出的內容是 `.btn 冒泡` -> `.inner-box 冒泡` -> `.outer-box 冒泡`，但因 .btn 在點擊事件觸發時加上 `e.stopPropagation();`，因此只印出 `.btn 冒泡` 後事件就停止往上傳遞了

如果將這段程式碼把 button 改成 a 標籤、 `e.stopPropagation();` 換成 `event.preventDefault()`，點擊 .btn 會印出 `.btn 冒泡` -> `.inner-box 冒泡` -> `.outer-box 冒泡`，代表雖然 a 標籤被阻止預設行為，但不會阻止事件傳遞