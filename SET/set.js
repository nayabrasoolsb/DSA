let arr = [1, 1, 1, 2, 3, 3, 4, 2, 3]
let set = new Set(arr);
set.add(20);
set.add(9)
set.add(12);
set.add("hello")
set.add(786)
// set.clear();
set.delete(12);
console.log(set.has("hello"))
// console.log(set.has(12));
// console.log(set.size);
// set.forEach(value=>console.log(value))
for (const elem of set) {
  // console.log(elem)
}