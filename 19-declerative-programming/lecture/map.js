// - Array.prototype.map()

const products = [
    {name: "cheese", price: 5, id: 1},
    {name: "milk", price: 5.5, id: 12},
    {name: "candy", price: 0.1, id: 13},
    {name: "coca cola", price: 54, id: 1123},
    {name: "eggs", price: 52, id: 134},
    {name: "whatever", price: 123123, id: 11213}
]


console.log(products.filter(product => product.price < 10));

function mapFunc(value, index, array) {
    console.log(value);
    return {price: value.price};
}

console.log(products.map(mapFunc));

const numbers = [1,2,3,4,5,6,7];
const result = numbers.map((x,i,arr) => x*x);
console.log(result)

const str = "hello";
const strArr = [...str].map(letter => letter + letter);

// const productNames = products.map((product, index, arr) => product.name)
const productNames = products.map(({name, price}) => ({name, price}));
const productNames1 = products.map((product, index, arr) => {
    const newObj = {};
    newObj.name = product.name;
    newObj.price = product.price;
    return newObj;
})

console.log(productNames1);

function print({name, price}) {
    console.log(name, price)
}
print({name: null, price: undefined});
