function solve(lines) {
  const M = lines[0];
  for (let i = 1; i <= M; i += 1) {
    const temp = lines[i].split(' '); // ['1','2','1']
    const A = temp[0];
    const B = temp[1];
    const K = Number(temp[2]);
    if (K === 1) {
      if (A.length > B.length) {
        console.log('A');
      } else if (A.length < B.length) {
        console.log('B');
      } else if (A > B) {
        console.log('A');
      } else if (A < B) {
        console.log('B');
      } else {
        console.log('DRAW');
      }
    } else if (K === -1) {
      if (A.length > B.length) {
        console.log('B');
      } else if (A.length < B.length) {
        console.log('A');
      } else if (A > B) {
        console.log('B');
      } else if (A < B) {
        console.log('A');
      } else {
        console.log('DRAW');
      }
    }
  }
}
solve(['3', '1 2 1', '1 2 -1', '2 2 1']);
