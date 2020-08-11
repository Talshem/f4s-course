console.log("hello")

// array from and fill
let y = new Array(5).fill(0);
let y1 = Array.from(y); // not the same as y1 = y
let y2 = y;
y[3] = 3;
console.log(y)
console.log(y1)
console.log(y2)

function arrayFrom(arrayToCopy){
    let resultArray = new Array(0);
    for (let i = 0; i < arrayToCopy.length; i++) {
        resultArray[i] = arrayToCopy[i];
    }
    return resultArray;
}

// array of
let x1 = Array.of(1)
let y1 = Array.from()
