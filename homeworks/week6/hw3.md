## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- address 標籤：聯繫人地址元素，用於表示聯絡方式的標籤，內容為聯絡人的電子郵件、電話、地址等等

範例：
```
<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```

參考來源：[&lt;address>: The Contact Address element - HTML：超文本標記語言 | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/address)

- hr 標籤：水平分隔線，用於表示段落轉換的語意，例如故事中的場景轉換

例如：
```
<p>
	This is the first paragraph of text.
	This is the first paragraph of text.
</p>
<hr>
<p>
	This is second paragraph of text.
	This is second paragraph of text.
</p>
```

參考來源：[&lt;hr> - HTML：超文本標記語言 | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/hr)

- &lt;ruby> 是旁註標記的意思，用於標示東亞文字的發音

例如日文的假名範例：

單詞發音
```
<ruby>
明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>
```
單字發音
```
<ruby>
漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```
&lt;rp> 用於有些不支援 &lt;ruby> 註釋的瀏覽器，將 &lt;rt> 中的發音字括起來

參考來源：

[&lt;ruby> - HTML：超文本標記語言 | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/ruby)

[&lt;rp>: The Ruby Fallback Parenthesis element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)

[&lt;rt>: The Ruby Text element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)

## 請問什麼是盒模型（box modal）

所有的 HTML 元素都可以視為一個 box，box 中的組成由外層到內層為 Margin 、Border 、 Padding 、 Content，都是 CSS 的屬性，可以透過 CSS 設定元素的這些屬性值來調整元素本身的空間，以及元素與其他元素的空間

- margin：不占元素本身的空間，主要可以用於調整與其他元素的間距

- border：屬於元素的空間，調整 border 時元素的空間也會跟著調整

- padding：屬於元素的空間，調整元素內部的間距

- content：元素中放的文字或圖片等等，是元素本身的內容

設定 box-sizing 為 border-box 時，元素設定的寬度就會自動包含 border 和 padding，自動推出剩下的 content 空間，若沒有設定 box-sizing 預設會是 content-box，設定元素的寬度時就是設定元素 content 的寬度，border 和 padding 的空間加上 content 的空間，才會是元素全部的空間

margin 需注意 margin-collapse 的情況，當區塊元素是由上而下排列，且有設定 margin-top 和 margin-bottom 時，兩個元素間的 margin-bottom 和 margin-top 會取較大值的 margin 值呈現，不會呈現兩個 margin 間距，若要避免此情況可以統一將間距都設定 margin-bottom（margin-top 第一個元素容易碰到 margin-collapse），若碰到此情況也可以在父層加上 padding-top，margin-top 就不會消失

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

區塊元素和行內元素，區塊元素會自動換行、可以調整寬高、padding 和 margin，例如 div、p

行內元素不能調整寬高和上下 margin、可以調整左右 margin 和 padding，但不會影響到其他相鄰元素的位置，調整 padding 時文字內容的位置也不會改變，例如 a、span

如果是 display: inline-block，不會自動換行，但是可以調整寬高、padding 和 margin，例如 img，但是需注意 inline-block 元素空間的下方會有 2 -3px 的留白，因 inline-block 會在文字基線下方預留空間顯示英文字母（像是 g、j 等等）或其他西方文字，可以設定 vertical-align 消除下方留白或將 display 設定成 block

當由上而下排列時使用區塊元素（div、h1 - h6、p...），若需要並排可以使用 inline-block，inline 通常會使用在超連結文字 `a` 或是文字段落中的部分文字 `<p> … <span>文字</span> … </p>`

當需要改變排版狀態，例如由上而下改成並排，或是並排改成由上而下，可以設定 display 屬性來轉換排列形式

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- position: static 是預設的定位型態，預設由左而右，由上而下排列，沒有特別設定 position 屬性的排列情況都是 position: static，例如一篇文章的 p 段落排列
- position: relative 可以讓元素根據原本的位置移動，元素設定 relative 移動位置後，原本的位置仍會保留（position: relative  對 table 相關元素無效），position: relative 較常見的使用為搭配 position: absolute 讓元素根據 relative 元素定位
- position: absolute 可以讓元素脫離正常的排列，根據另一個元素的位置來移動，會從元素的上層開始找，直到找到非 position: static 的元素，根據其定位，可以用於元素需要在父層元素角落時，例如 modal 關閉按鍵，或是偽元素根據元素本身定位，例如多邊形，參考來源：
[單一 div 的正多邊形變換 ( 純 CSS ) - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201503/css-regular-polygon-transform.html)
- position: fixed 會讓元素根據瀏覽器視窗（viewport）定位，因此當使用卷軸滾動視窗時，元素仍然會留在視窗同一位置，可以用於電商網站的購物車或結帳按鈕，或是回到頁面最上方的按鈕