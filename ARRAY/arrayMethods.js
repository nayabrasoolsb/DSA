// let arr = [12, 4, 5, 9, 18, 14, 24, 7];
// arr[0] = 21; //- constant
// arr.pop(); //- constant - returns popped element
// arr.shift(); //- linear - returns element which is removed from front
// arr.unshift(10); //- linear - returns new length after adding elem at front
// arr.push(16); //- constant - returns new length after adding elem at end

// console.log(arr.slice(1, -1)); //- linear return sliced array
// console.log(arr.splice(6, 2, 17)) //- linear returns an array of deleted elements
// console.log(arr.splice(-2, 2));
// console.log(arr.concat(13));

let arr = [12, 4, , 9, 18, 14, 24, 7];
// console.log(
//   arr.findIndex((x, i) => {
//     return x===14;
//   }),//=>return index if the element is there in the array else returns -1
// );
// console.log(arr.find(x=> x==9)) //=> return element if there else return -1
// console.log(arr);
// console.log(arr.forEach(x=> console.log(x))) //=> it'll ignore empty items
// console.log(arr.map(x=>x*2)); //=> return an array will element is double the actual one
console.log(arr.every((x) => x > 5)); //-> false not every element is greater than 5
console.log(arr.some((x) => x > 5)); //->true, at lease one element is greater than 5
console.log(arr.includes(9)); //-> true
console.log(arr.indexOf(14)); //-> working like includes method
console.log(arr.join("test"));

//!split

// console.log(arr.reverse()) //-> changes orginal array
console.log(arr.toString()); //-> elements converted into string including commas
console.log(arr.sort((a, b) => a - b)); //-> to sort in ascending order
console.log(arr.sort((a, b) => b - a)); //-> to sort in descending order
console.log(arr);
