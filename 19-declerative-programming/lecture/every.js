// Array.prototype.every()

const array = [0,1,2,3,4,5];
function callbackfn(value, index, array) {
    if (index % 2 === 0) { // index is even
        return value % 2 === 0; // value is even
    }
    return value % 2 === 1; // value is odd
    return (index%2 === 0 && value % 2 === 0) || (index % 2 === 1 && value % 2 === 1);
}
const result = array.every(filterFn)
console.log({result: result});

function isAllEven(arr) {
    return arr.every(x => x%2 === 0);
}

console.log(isAllEven([2,4,5,8]));

function myEvery(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i],i,arr) === false) {
            return false;
        }
    }
    return true;
}

const result2 = myEvery(array, filterFn)
console.log({result2})
function myForEach(arr, cb){
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);   
    }
}

function isPalindrome(arr) {
    return arr.every((x, i, arr) => x === arr[arr.length - i - 1]);
}

console.log(isPalindrome([1,2,3,2,1]))
