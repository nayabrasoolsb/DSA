const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubbleSort = (arr) => {
  let flag;
  for (let i = 0; i < arr.length; i++) {
    flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
        // console.log(arr);
      }
    }
    if (flag === false) {
      return;
    }
  }
};

// const arr = [12, 11, 8, 19, 26, 15, 5];
const arr = [1, 5, 2, 3, 4];
console.log(bubbleSort(arr));
console.log(arr);
