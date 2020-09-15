function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (Number(num) % i === 0) {
      return false;
    }
  }
  return true;
}
function solve(lines) {
  for (let i = 1; i < lines.length; i += 1) {
    if (Number(lines[i]) === 1) {
      console.log('Composite');
    } else if (Number(lines[i]) === 2) {
      console.log('Prime');
    } else if (Number(lines[i]) > 2) {
      if (isPrime(lines[i])) {
        console.log('Prime');
      } else {
        console.log('Composite');
      }
    }
  }
}
solve(['5', '1', '2', '3', '4', '5']);
