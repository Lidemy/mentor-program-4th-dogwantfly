function solve(lines) {
  const str = lines[0];
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  if (result === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}
solve(['abbbba']);
