function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1); 
}
//將第一個字母轉成大寫（若本來就是大寫使用 toUppercase() 也會是大寫），再用 slice() 加上第二個字母後的部分
console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));