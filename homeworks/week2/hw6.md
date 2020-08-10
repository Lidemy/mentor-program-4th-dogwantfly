``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第最後一行，執行 isValid 的 function
2. 執行第 1 行，此時 arr 是  [3, 5, 8, 13, 22, 35]，arr.length = 6
3. 進入第 2 行，此時 arr: [3, 5, 8, 13, 22, 35]，i:undefined
4. 執行第 2 行迴圈，i:0，符合 i < arr.length(也就是 6），進入迴圈
5. 執行第 3 行，判斷 arr[0] 是否 <= 0
6. 不是，回到第 2 行，把 i+1，此時 i:1，符合 i < arr.length(也就是 6），進入迴圈
7. 執行第 3 行，判斷 arr[1] 是否 <= 0
8. 不是，回到第 2 行，把 i+1，此時 i:2，符合 i < arr.length(也就是 6），進入迴圈
9. 執行第 3 行，判斷 arr[2] 是否 <= 0
10. 不是，回到第 2 行，把 i+1，此時 i:3，符合 i < arr.length(也就是 6），進入迴圈
11. 執行第 3 行，判斷 arr[3] 是否 <= 0
12. 不是，回到第 2 行，把 i+1，此時 i:4，符合 i < arr.length(也就是 6），進入迴圈
13. 執行第 3 行，判斷 arr[4] 是否 <= 0
14. 不是，回到第 2 行，把 i+1，此時 i:5，符合 i < arr.length(也就是 6），進入迴圈
15. 執行第 3 行，判斷 arr[5] 是否 <= 0
16. 不是，回到第 2 行，把 i+1，此時 i:6，不符合 i < arr.length(也就是 6）跳出迴圈
17. 執行第 5 行，此時 arr 是  [3, 5, 8, 13, 22, 35]，arr.length = 6，i=2，符合 i < arr.length
18. 執行第 6 行，判斷 arr[2] 是否不等於 arr[1]+arr[0] (8)
19. 不是，回到第 5 行，把 i+1，此時 i:3，符合 i < arr.length(也就是 6），進入迴圈
20. 執行第 6 行，判斷 arr[3] 是否不等於 arr[2]+arr[1] (13)
21. 不是，回到第 5 行，把 i+1，此時 i:4，符合 i < arr.length(也就是 6），進入迴圈
22. 執行第 6 行，判斷 arr[4] 是否不等於 arr[3]+arr[2] (21)
23. 是，回傳 'isValid'