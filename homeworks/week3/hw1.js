function printStar(n) {
  let s = '';
  for (let i = 1; i <= n; i += 1) {
    s += '*';
  }
  console.log(s);
}
function solve(lines) {
  for (let i = 1; i <= Number(lines[0]); i += 1) {
    printStar(i);
  }
}
solve(5);
