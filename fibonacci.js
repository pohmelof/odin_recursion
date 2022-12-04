// fibonacci by loop

function fibs(num) {
  if (num <= 0 || isNaN(num)) return "invalid argument";

  const arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) arr.push(0);
    if (i === 1) arr.push(1);
    if (i > 1) arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}
console.log("loop:");
console.log(fibs(10));
console.log(fibs(-2));
console.log(fibs(3));

// fibonacci by recursion

function fibsRec(num) {
  if (num <= 0 || isNaN(num)) return "invalid argument";
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const arr = fibsRec(num - 1);

  return [...arr, arr[num - 2] + arr[num - 3]];
}
console.log("recursion:");
console.log(fibsRec(8));
console.log(fibsRec(0));
console.log(fibsRec(1));
