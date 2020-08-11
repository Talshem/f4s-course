// - Array.prototype.find()
//     - Array.prototype.findIndex()
//     - Array.prototype.includes()
//     - Array.prototype.indexOf()
//     - Array.prototype.lastIndexOf()

const arr = [
  { num: 1, second: [111] },
  { num: 2, second: [222] },
  { num: 123, second: [123123123] },
  { num: 3454, second: [345434543454] },
  { num: 235, second: [235235235] },
];
const res = arr.find((value, index, arr) => {
  return value.num === 235;
});
res.second.push(5);
console.log(arr);

function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i],i,arr)) {
            return arr[i];
        }
    }
}

function myFindIndex(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i],i,arr)) {
            return i;
        }
    }
    return -1;
}

console.log(myFind(arr, obj => obj.num === 235))

console.log(arr.find(obj => obj.num === 235))
console.log(arr.findIndex(obj => obj.num === 235))

let elem = arr[3];
let index = arr.indexOf(elem);
console.log(index)

let brr = ["hi", "dog", "cat", "hi", "dog", "purple", "hi"];
console.log(brr.indexOf("hi"))
console.log(brr.lastIndexOf("hi"))

console.log(brr.includes("dog",3))
function myIncludes(arr, elem) {
    return arr.findIndex(x => x === elem) !== -1;
    return arr.indexOf(elem) !== -1;
}
