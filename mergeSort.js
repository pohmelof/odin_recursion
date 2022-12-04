function _merge(leftArr, rightArr) {
  const arr = [];
  while (leftArr.length && rightArr.length) {
    if (typeof leftArr[0] != "number" || typeof rightArr[0] != "number")
      return "Error: array includes invalid element";
    if (leftArr[0] < rightArr[0]) {
      arr.push(leftArr.shift());
    } else {
      arr.push(rightArr.shift());
    }
  }

  return [...arr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const arrHalf = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, arrHalf);
  const rightArr = arr.slice(arrHalf, arr.length);

  return _merge(mergeSort(leftArr), mergeSort(rightArr));
}

const arr1 = [234, 4455, 23, 1, 8675, 994, 99, 4, 76, 5435];
const arr2 = [9, 3, 4, 5, 6, false];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
