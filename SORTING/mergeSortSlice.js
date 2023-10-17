const merge = (leftArr, rightArr) => {
  let sortedArr = [];
  let i = 0,
    j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      sortedArr.push(leftArr[i++]);
    } else {
      sortedArr.push(rightArr[j++]);
    }
  }
  while (i < leftArr.length) {
    sortedArr.push(leftArr[i++]);
  }
  while (j < rightArr.length) {
    sortedArr.push(rightArr[j++]);
  }
  return sortedArr;
};

const mergeSort = (arr) => {
  if (arr.length > 1) {
    const mid = parseInt(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
  return arr;
};
const arr = [12, 11, 8, 19, 26, 15, 5, -2];
console.log(mergeSort(arr));
