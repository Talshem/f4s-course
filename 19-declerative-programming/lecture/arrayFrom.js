// - Array.from()
//     - Array like items
//     - [...arrayLike]
//     - Array.of()
//     - Array.isArray()
let x = Array.of(1,2,3) // x = [1,2,3]
let y = Array.from([1,2,3])
console.log({x,y});

function arrayOf(...rest){
    console.log(arguments)
    return [...rest]
}

console.log(arrayOf(1,2,3,4))

const test = {
    "0": 2,
    "1": 3,
}
console.log(test);
const regularConcat = []
console.log(Array.isArray(test))

function arrayIsArray(toCheck) {
    const isArray = toCheck.push !== undefined ? true : false;
    return isArray;
}

const toTest = {push: true};
console.log(Array.isArray(toTest))

