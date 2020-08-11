// - Array.prototype.reduce()
//     - Array.prototype.reduceRight()
//     ```
//     "field1=value1&field2=value2&field3=value3"
//         .split("&")
//         .map(s=>s.split("="))
//         .map(([k,v])=>({[k]:decodeURIComponent(v)}))
//         .reduce((agg,x)=>({...agg,...x}))
//     ```
//     ```
//     [...str.matchAll(/([^=&]+)=([^&]+)/g)]
//         .reduce((agg,[_,k,v])=>({[k]:decodeURIComponent(v),...agg}),{})
//     ```
//     ```
//     Object.entries(json).map(([k,v])=>k+"="+encodeURIComponent(v)).join("&")
//     ```

const numbers = [1,2,3,4,5];
const initial = 1;
const reduceFn = (previousValue, currentValue, currentIndex, array) => {
    const result = previousValue * currentValue;
    // console.log({previousValue, currentValue, result})
    return result;
};
const result = numbers.reduce(reduceFn)
// console.log(result);

function myReduce(arr, cb, initial) {
    let previousValue = initial;
    for (let i = 0; i < arr.length; i++) {
        previousValue = cb(previousValue, arr[i], i ,arr);
    }
    return previousValue;
}

// console.log(myReduce(numbers, reduceFn, 0))


let res1 = "field1=value1&field2=value2&field3=ub%2Fcallback%2F%3Fcode%3D73ba2cda666b77bc9273"
.split("&")
.map(s=>s.split("="))
// .map(([k,v])=>({[k]:decodeURIComponent(v)}))
// same as
.map((arr)=>{
    const k = arr[0];
    const v = arr[1];
    const obj = {};
    obj[k] = decodeURIComponent(v);
    return obj;
})
.reduce((prev,curr)=>({...prev,...curr}))
/*
/**/
console.log(res1);

let res2 = [..."field1=value1&field2=value2&field3=ub%2Fcallback%2F%3Fcode%3D73ba2cda666b77bc9273".matchAll(/([^=&]+)=([^&]+)/g)]
         .reduce((agg,[_,k,v])=>({[k]:decodeURIComponent(v),...agg}),{})
console.log(res2)

let x = {
    a: 1,
    b: {},
    c: () => {}
}
let string = Object.entries(res2)
.map(([k,v])=>k+"="+encodeURIComponent(v))
/*
.join("&")
*/
console.log(string)

let string2 = Object.entries(res2)

console.log(string2)
console.log(string2.flat())