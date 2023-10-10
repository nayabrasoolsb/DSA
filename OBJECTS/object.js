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

// console.log(obj.myName);
// console.log(obj["myName"]);
// console.log(obj["graduation year"]);
obj.salary = 10_000_000;
obj["empId"] = 43343;

delete obj["salary"];
// console.log(obj);
// console.log(obj.password);
let arr = [1, 2, 3, 4, 5, "nayab"];
console.log(arr.indexOf("nayab"));
arr.sort()