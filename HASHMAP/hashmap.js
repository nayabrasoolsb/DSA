let arr2 = [12, 1, 6, 12, 1, 6, 15];
let map2 = new Map();

for (const elem of arr2) {
  if (!map2.has(elem)) {
    map2.set(elem, 1);
  } else {
    map2.set(elem, map2.get(elem) + 1);
  }
}
console.log(map2);
map2.forEach((value, key) => console.log(key, value));

const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, "eins"]]);
// console.log(merged);

let map = new Map();
map.set("name", "rasool");
map.set("age", 22);
map.set("gender", "male");
// console.log(map);
// console.log(map.get("name"));
// console.log(map.has("name"));
// console.log(map.get("graduation") != undefined);
// console.log(map.size);

let arr = [
  ["key1", "value1"],
  ["key2", "value2"],
];
let arr1 = [["key3", "value3"]];
let map1 = new Map([...arr, ...arr1, ["key4", "value4"], ...map]);
map1.delete("key4");
console.log(map1.size, "hiiiii");
// map1.clear(); // will clear everything inside the map;
// console.log(map1);
// console.log(Array.from(map1));
