// - Array.prototype.forEach()

let arr = [1,2,3,4,5,"hello"];
// for (let i = 0; i < arr.length; i++) {
//     console.log([i, arr[i]]);    
// }
const filterFn = (value, index, array, myArg) => {
    console.log([value/* , array[array.length-index-1] */]);
}
// arr.forEach(callbackfn)

function myForEach(arr, cb){
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);   
    }
}

// myForEach(arr, callbackfn);

arr.forEach(filterFn);

const obj = {
    arr: "hello",
    myForEach: cb => {
        for (let i = 0; i < obj.arr.length; i++) {
            cb(obj.arr[i], i, obj.arr);    
        }
    }
}