const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, high) => {
  let i = low;
  const pivot = arr[high];
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, high);
  return i;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
};
const arr = [12, 11, 8, 19, 26, 15, 5];
quickSort(arr);
console.log(arr);
