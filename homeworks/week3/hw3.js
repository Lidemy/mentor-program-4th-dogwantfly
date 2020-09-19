function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (Number(num) % i === 0) {
      return false;
    }
  }
  return true;
}
function solve(lines) {
  for (let i = 1; i < lines.length; i += 1) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite');
  }
}
solve(['5', '1', '2', '3', '4', '5']);
