// 回傳數字幾位數
function digitsCount(n) {
  if (n === 0) return 1;
  let result = 0;
  let m = n;
  while (m !== 0) {
    m = Math.floor(m / 10);
    result += 1;
  }
  return result;
}

function isNarcissistic(n) {
// 幾位數
  let m = n;
  const digits = digitsCount(m);
  let sum = 0;
  while (m !== 0) {
    const num = m % 10;
    // Math.pow(num, digits)
    sum += num ** digits;
    m = Math.floor(m / 10);
  }
  return sum === n;
}
function solve(lines) {
  const temp = lines[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  for (let i = n; i <= m; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}
solve(['5 200']);
