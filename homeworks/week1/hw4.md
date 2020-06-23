## 跟你朋友介紹 Git

Git 就像菜哥說的可以拿來做版本控制，他的基本概念，可以類比平常在操作資料夾比較好了解，(不過要注意並不是真的完全像是操作資料夾那樣)，就像是在幫你把每個版本都存進該版本專屬的資料夾，類似菜哥平常會把自己的笑話紀錄依照版本新建資料夾，紀錄自己每個時期的笑話，使用 git 後就是 git 在幫你做這些事

### 開始使用 git
第一步要先去 git 官網下載 git，然後就可以打開 command line 開始使用了，打開 command line 後要先切換到要版本控制的資料夾 `cd ....`

#### git init
接下來，要把 git 加進你的笑話紀錄資料夾中才開始在這個資料夾管理笑話，把 git 加進要做版本控制的資料夾的指令是：`git init` ，初始化 git

#### git add
然後這樣就可以開始版本控制了嗎？還沒，剛剛的 `git init` 指令只是讓這個資料夾可以開始使用 git ，要讓這個資料夾加入版本控制還要使用 `git add (後面接要加入版本控制的檔案)`，也可以使用 `git add .`，把該資料夾中的全部檔案都加入版本控制


#### git commit
這樣菜哥的笑話紀錄資料夾就可以做版本控制了，之後菜哥如果想把貧血的笑話進化升級，改完笑話後就可以使用 `git commit -m 'joke'`，把這個改完的部分 commit，也就是把最新部分嫁到版本控制中，如果用資料夾來比喻，就像是菜哥把最新修改好的笑話再開一個新資料夾放這個最新的笑話，因此最新版的笑話紀錄就是這個 joke 版本，指令中的 `-m` 的 m 就是 modified(修改)，`'joke'`的部分可以自己設定 commit message ，讓自己好辨識版本就好，要記得加引號''、""

如果想一次把檔案加入版本控制並存到最新版的改動，也可以使用指令`git commit -am 'joke'`，指令中的 `-a`就是 add 的意思，會直接執行 git add 和 git commit 兩個動作

補充一下如果 git commit的時候出現錯誤，跳出了一個要你設定帳號跟姓名的畫面，請輸入以下指令
```
（記得把名字跟 email 換成你自己的）

git config --global user.name "your name"
git config --global user.email "youremail"
```

#### git status
如果想查看檔案的 git 狀態可以使用 `git status`，查看現在資料夾中有哪些檔案還沒加入版本控制，或是已經加入版本控制但還沒 commit 成新版本，輸入指令後可能會看到以下訊息：
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	joke.txt

nothing added to commit but untracked files present (use "git add" to track)
```

你可以看到中間有 untracked files，裡面有一個笑話紀錄 joke.txt，代表這個檔案還沒被追蹤到，意思就是沒有加入版本控制，這時候就輸入 `git add .` 把他加入就可以了

```
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   joke.txt
```
輸入 git add 後，再輸入 git status 查看就會發現 joke.txt 跑到 changes to be committed 下面，代表已經加入版本控制，輸入 git commit 的指令就可以新增新版本

已經 commit 後再使用 `git status` 就看不到已經 commit 的檔案了

總之，如果菜哥忘記自己有哪些檔案加入版本控制或 commit ，可以使用`git status`這個指令

#### git log
如果菜哥想看自己到底 commit 了幾個版本，可以使用 `git log` 指令，可以看到這個檔案修改的歷史紀錄
假如改了兩次， `git log` 大概會是這樣：
```
commit 67e0e7443b7624d776b8a3973129f2a6c33bfe70 (HEAD -> master)
Author: tsaibrother <tsaibrother@gmail.com>
Date:   Tue Jun 16 13:58:43 2020 +0800

    second commit

commit f041daf7a896afd27199f2c8bd6ee55cd3654113
Author: tsaibrother <tsaibrother@gmail.com>
Date:   Tue Jun 16 12:32:59 2020 +0800

    first commit
(END)
```
這邊補充一下，當 git commit 後， git 會幫你新建一個版本，並給這個版本一個亂數版本號(不會和其他版本號重複)，上面看到的 commit 後面就是這個版本的版本號，由一串很長的亂數組成
另外這個是詳細的資訊，如果想看比較簡短的可以使用 `git log  --oneline`，會像是這樣：

```
67e0e74 second commit
f041daf first commit
(END)
```
這邊會顯示七碼的亂數版本號以及 commit message

#### git checkout
假設菜哥會和其他觀眾分享自己的笑話進化史，想要給大家看之前版本的笑話，再給大家看現在最新的，讓大家知道他的笑話功力節節高升，這時候就可以使用 `git checkout f041daf7a896afd27199f2c8bd6ee55cd3654113`，後面接想切換到的版本號，可以在 git log 時複製，這樣就可以切換到之前的版本了，看完想再切換到最新的再輸入`git checkout master`，master 預設是最新的版本

#### 把菜哥的笑話放到遠端

不知道菜哥會不會想要把自己的笑話進化史傳到網路上管理，這樣之後用其他電腦也可以繼續編輯自己的笑話！這邊介紹一個可以放自己的 git repository 的地方：github，補充介紹 repository 是什麼，其實就是菜哥的笑話資料夾加入 git 之後，這個資料夾就算是一個儲存庫（repository)，github 就是集中 git repository 的地方，就像我們會把檔案丟到雲端一樣，我們也可以把檔案丟到 github ，還可以做版本控制

#### git remote add
要怎麼把菜哥的笑話資料夾從菜哥的電腦丟到 github 呢，首先要先到 github 建立一個新的 repository ，當作放這個笑話紀錄的地方，在建立新的 repository 後，因為這個 repository 係在沒有任何內容，要從菜哥的電腦把這個資料夾放上去，回到 command line 使用指令`git remote add origin https://github.com/tsaibrother/joke.git`，git remote add 就是把遠端(github)上的 repository 加入版本控制的意思，後面那轉串網址則是在剛剛建立空的 repository 時，可以到說明中複製或是到 repository 頁面點選綠色的 clone 按鈕也可以看到這個網址，origin 是一個代號，也可以改成其他名稱

#### git push
在 `git remote add`後，接著就是`git push origin master` 把在菜哥電腦中（本地）的笑話資料夾，推到遠端的 origin 代號的 master （分支），沒有講解到 branch (分支) ，這邊先說一下再檔案加入 git 一開始都只會有一個預設分支，就是 master，因此 `git push origin master`這個指令就是把菜哥的笑話文字記錄都放上去遠端的 github

#### git pull

剛剛介紹了推，現在介紹拉，什麼時候會用到這個 `git pull` 呢，假如菜哥他在遠端的 github 直接更改了笑話內容，現在又想要在電腦上繼續編輯，可是因為在遠端的
 github 修改，電腦上的檔案並不會跟著修改，因此必須要把這個最新的改動從遠端拉下來自己的電腦，這時就可以在 command line 輸入 `git pull origin master`，這樣就會把遠端的 repository 更新到本地，就可以用這個最新版本的笑話繼續編輯

 然後在改好後，再 `git commit -am '笑話的最最最新版'` (記得在每次更改完後都要 commit)，接著再 `git push origin master` 就讓遠端和本地同步了

 #### 總結

 認識 git 怎麼版本控制：就像把每個版本新增資料夾， git 就是在幫你管理類似的事情

 開始用 git 版本控制：
 1. `git init `
 2. `git add .`
 
 3. 編輯完內容後，`git commit -m '笑話' `或 `git commit -am'笑話'`
 
 4. 把內容放到遠端：先在遠端建立空的 repository，再使用`git remote add .....git`，再把內容`git push origin master` 推到遠端
 5. 把最新的內容拉到自己的電腦中 `git pull origin master`，

* 查看 git 狀態：`git status`
* 查看版本歷史紀錄：`git log`

希望菜哥看得懂我冗長的文字了～