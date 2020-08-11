let arr = [11,2,333,413];
function sortingFunction(elemA, elemB) {
    console.log({elemA, elemB})
    return elemB.toString().length - elemA.toString().length
    if (elemB.toString().length > elemA.toString().length) {
        return -1;
    }
    return 1;
}
arr.sort(sortingFunction);
console.log(arr)


const products = [
    {name: "cheese", price: 5, id: 1},
    {name: "milk", price: 5.5, id: 12},
    {name: "candy", price: 0.1, id: 13},
    {name: "coca cola", price: 54, id: 1123},
    {name: "eggs", price: 52, id: 134},
    {name: "whatever", price: 123123, id: 11213}
]

// const productsSorted = [...products].sort(({price: priceA}, {price: priceB}) => priceA - priceB);
// same as:
const productsSorted = [...products].sort(function (productA, productB) {
    const priceA = productA.price;
    const priceB = productB.price;
    return priceA - priceB;
});
console.log(productsSorted);
