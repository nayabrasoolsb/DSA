class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = 0;
  }
  hashFun(key) {
    let hash = 0;
    for (const i in key) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  set(key, value) {
    let index = this.hashFun(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let pair = bucket.find(([key1]) => key1 == key);
      if (pair) {
        pair[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
    this.size++;
  }
  get(key) {
    let index = this.hashFun(key);
    let bucket = this.table[index];
    if (bucket) {
      let pair = bucket.find((pair) => pair[0] == key);
      if (pair) {
        return pair[1];
      }
    }
    return undefined;
  }
  delete(key) {
    let index = this.hashFun(key);
    let bucket = this.table[index];
    if (bucket) {
      let pairIndex = bucket.findIndex((pair) => pair[0] == key);
      bucket.splice(pairIndex, 1);
      this.size--;
      return;
    }
    return undefined;
  }
  toString(){
    let str = ""
    for (const bucket of this.table) {
      if(bucket){
        for (const pair of bucket) {
          str+=`${pair[0]}==> ${pair[1]}, `;
        }
      }
    }
    return str;
  }
}
let h1 = new HashTable(127);
h1.set("name", "nayab");
h1.set("mane", "stark");
h1.set("mane", "rasool");
h1.delete("df");
h1.set("age", 22);
// h1.delete("age")
console.log(h1.get("age"));
console.log(h1.table)
console.log(h1.toString());
