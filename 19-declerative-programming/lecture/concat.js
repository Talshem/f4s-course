// - Array.prototype.concat()
//     - [...arr, ...brr]

x = [1,2,3]
x1 = "hello"
y = [1,2,3]
regularConcat = x.concat(x1,y);
// z1 = Array.prototype.concat(x,x1,y) // z1 = [].concat(x,x1,y)
let myConcatResult = myConcat(x,x1,y)
console.log({regularConcat, myConcatResult})

function myConcat(arr1, arr2, arr3) {
    console.log(...arr1)
    console.log(...arr2)
    console.log(...arr3)
    return [...arr1, ...arr2, ...arr3];
}

console.log({x,y,regularConcat})
console.log({z1: myConcatResult,myConcat: myConcatResult})
// same as:
// console.log({
//     "x": x,
//     "y": y
// })