const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
};
const arr = [12, 11, 8, 19, 26, 15, 5, -2];
selectionSort(arr);
console.log(arr);
// console.log(Math.sqrt(Math.pow(40, 2) + Math.pow(40, 2)));
