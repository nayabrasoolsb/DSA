const linearSearchRecursive = (arr, target, i = 0) => {
  if (i == arr.length) {
    return "target doesnt exist";
  }
  if (arr[i] === target) {
    return i;
  }
  return linearSearchRecursive(arr, target, i + 1);
};
let arr = [12, 12, 11, 4, -6, 17, 15, 33, 23, 21];
console.log(linearSearchRecursive(arr, 21));
