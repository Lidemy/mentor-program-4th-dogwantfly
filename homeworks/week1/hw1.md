## 交作業流程

寫作業前要記得先開新的 branch ，並切換到新的 branch，可以用 git branch -v 查看現在在哪一個branch
```
git branch week1
git checkout week1
```
### 作業寫完準備交作業

1. 在自己新開的 branch：week1，先 `git add .` 把全部檔案加入版本控制，
2. 也可以把 git add . 和 commit 步驟一起做，`git commit -am 'week1 完成' `
2. 把作業資料夾最新版本推到遠端 github ，`git push origin week1(新增的 branch 名稱)`
3. 推上去後到自己的 github repository 再用 pull request 準備合併到 master 的 branch，並在新增 pull request，打上標題及敘述或想問的問題，確認自己的新增或修改內容
4. 到 lidemy 學習系統的作業頁面按「新增作業」」，並在新增作業選擇要繳交的週次（week1)，貼上自己的 PR 連結（要到 pull request 的頁面複製連結，網址中有 pull 的）
5. 同樣在學習系統新增作業的步驟，要記得在檢查完作業有無符合當週需求，和做完作業自我檢討後勾選這兩個選項
6. 按送出交出作業，送出後會在作業區看到自己的作業，點擊週次就可以連到自己的 pull request 畫面

### 被 merge 後
* 先切換到 master branch `git checkout master`，`git pull origin master`，下載遠端最新版本的作業，最後記得：如果沒有要再修改，就可把之前在本地的 week1（做作業時的 branch) 刪除，`git branch -d week1`

### 要再次開始做作業時
如果想要再修改，而本地的 week1 分支還沒刪除，可以直接修改後 commit，最後 push 上去 github

如果已經刪掉之前的 week1 分支，記得要再次新增新的 branch，可以輸入`git checkout -b week1-第一次修改`，直接新增 branch 並切換到該 branch


