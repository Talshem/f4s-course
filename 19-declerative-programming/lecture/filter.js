// - Array.prototype.filter()
console.log(1)
const arr = [1,3,5,6,7,3,12,1,4,123,5,1234,34,543,454,234,1234];
function filterFn(value, index, array) {
    return value % 2 === 0;
}

const resArr = arr.filter(filterFn);
console.log(resArr);

function myFilterFn(arr, cb) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i],i,arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}