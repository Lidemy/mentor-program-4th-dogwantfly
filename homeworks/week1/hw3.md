## 教你朋友 CLI


h0w 哥的問題：
```
「能不能教我 command line 到底是什麼，然後怎麼用啊？
  我想用 command line 建立一個叫做 wifi 的資料夾，
  並且在裡面建立一個叫 afu.js 的檔案。就交給你了，教學寫好記得傳給我，ㄅㄅ」
```

### 首先，一起來認識 command line
command line interface (命令列介面或命令行介面，簡稱CLI) 相對於 graphical user interface(圖形使用者介面，可以簡稱 GUI)，聽起來很複雜，不過其實 GUI 就是我們平常使用電腦時，用滑鼠點擊資料夾，再點擊其中檔案，就可以把這個檔案打開，像是 h0w 哥想要建立一個 wifi 資料夾，就可以直接在桌面按右鍵，此時會出現新增資料夾的選項，點選後就新增一個新資料夾了，點一下名稱改成「wifi」，就完成建立這個 wifi 資料夾

像這樣用滑鼠在電腦畫面上點選選，執行想做的動作，這就是使用 GUI，而剛剛說 command line interface 相對於 GUI，因為他並不是在一個畫面上，有各種圖示化的選項可以執行想做的動作，他是一個只能用純文字來操作電腦的介面，由於只能用文字，因此會有各種指令，比如：`pwd`，這樣短短的指令，去和電腦溝通

### 安裝 command line

大概知道 command line 的用途後，就可以開始使用了，不過在這之前要先確定你的電腦上有 command line，如果你是 mac 系統的話，內建就有 command line，只要按 command + 空白鍵，然後在搜尋框輸入 terminal，就可以開啟 mac 系統的 command line，如果不想使用內建的，也可以搜尋 iterm2 ，在官網下載即可

如果你是 windows 系統，會建議你下載 git bash 來操作 conmmand line，到 Git 官網：https://git-scm.com/ ，點選 download 後就一直下一步就可以安裝完成，安裝完成後找到「Git Bash」開啟，這個就是你的 command line 了，可以在上面輸入指令操作電腦

windows 系統還有另一種可以下載 : Cmder，一樣下載後解壓縮就可以使用，git bash 和 cmder 擇一就好

### 開始使用 command line !
安裝完成後就可以開始使用囉，h0w 哥想要做的是：建立一個叫做 wifi 的資料夾，
  並且在裡面建立一個叫 afu.js 的檔案，因此先介紹如何建立資料夾，首先要選定想要新增資料夾的地方，假如是想建在桌面，就要先使用指令`cd desktop`，指向要新增資料夾的地方，`cd` 是切換檔案路徑用的指令
  接下來就可以新增資料夾，指令是
  ```
  mkdir wifi(資料夾名稱)
  ```
輸入後 enter 就可以看到桌面上多一個名稱是 wifi 的資料夾，記得先 `cd` 切換到新建的 wifi 資料夾，接著就可以在裡面新增檔案，新增檔案的指令是
```
touch afu.js(要新增的檔案名稱)
```
`touch`這個指令顧名思義就是去觸碰一下檔案，這個指令可以用來更改已存在的檔案的最後修改時間，除此之外也可以用來新增檔案，如果 `touch` 後面接的是不存在的檔案名，就會直接幫你新增此名稱的檔案！

### 總結

最後再複習一次 command line 是什麼，要如何使用，達成 h0w 哥想要執行的動作
1. command line 是一個用純文字下指令操作電腦的一個視窗（工具）
2. 若是 mac 系統內建就有（不想用內建的也可以下載 iterm2)，windows 系統可以選擇下載 git，就會有 git bash 這個應用程式，或是選擇下載 cmder 也可以，擇一下載即可
3. 開始使用：`cd desktop`，切換到想新增資料夾的地方（這裡假設資料夾新增在桌面），` mkdir wifi`，新增名稱為 wifi 的資料夾，` touch afu.js`，新增名為 afu 的 js 檔

完成！
ㄅㄅ

