const linearSearch = (arr, target) =>{
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element===target){
      return i;
    }
  }
  return "element doesnt exist"
}

let arr = [12, 12, 11, 4, -6, 17, 15, 33, 23, 21];
console.log(linearSearch(arr, 21));