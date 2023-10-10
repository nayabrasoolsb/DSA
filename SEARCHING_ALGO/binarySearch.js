const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = parseInt((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ["target doesnt exist", low, high];
};

const arr = [1, 4, 5, 6, 9, 11, 13, 14, 18, 22, 25, 28, 31, 33, 37];
console.log(binarySearch(arr, 38));
