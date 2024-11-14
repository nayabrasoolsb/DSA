let myName = "rasool";
let temp = { key1: "value1", key2: "value2" };
let id = Symbol("password");
let obj = {
  ...temp,
  myName,
  [id]: "ksdj343kdk",
  age: 22,
  gender: "male",
  "graduation year": 2021,
};

// console.log(obj.myName); // rasool
// console.log(obj["myName"]);// rasool
// console.log(obj["graduation year"]); // 2021
obj.salary = 10_000_000;
obj["empId"] = 43343;

delete obj["salary"];
// console.log(obj);
// console.log(obj.password); // undefined
let arr = [1, 2, 3, 4, 5, "nayab"];
console.log(arr.indexOf("nayab")); // 5
arr.sort()