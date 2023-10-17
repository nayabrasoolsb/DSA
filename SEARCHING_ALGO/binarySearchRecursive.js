const binarySearchRecursive = (arr, target, low = 0, high = arr.length - 1) => {
  if (low > high) {
    return ["target doesnt exist", low, high];
  }
  const mid = parseInt((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
};

const arr = [1, 4, 5, 6, 9, 11, 13, 14, 18, 22, 25, 28, 31, 33, 37];
console.log(binarySearchRecursive(arr, 9));
