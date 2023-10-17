const merge = (arr, low, mid, high) => {
  const leftArrLength = mid + 1 - low;
  const rightArrLength = high - mid;
  const L = [];
  const R = [];
  for (let i = 0; i < leftArrLength; i++) {
    L[i] = arr[low + i];
  }
  for (let i = 0; i < rightArrLength; i++) {
    R[i] = arr[mid + 1 + i];
  }
  let i = 0,
    j = 0,
    k = low;
  while (i < leftArrLength && j < rightArrLength) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }
  while (i < leftArrLength) {
    arr[k++] = L[i++];
  }
  while (j < rightArrLength) {
    arr[k++] = R[j++];
  }
};

const mergeSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const mid = parseInt((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
};

const arr = [12, 11, 8, 19, 26, 15, 5, -2];
mergeSort(arr);
console.log(arr);
