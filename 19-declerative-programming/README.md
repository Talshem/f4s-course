# Declarative JS
* imperative vs declarative paradigms
* Functions as first class citizens

## array functions
- Array.from()
    - Array like items
    - [...arrayLike]
    - Array.of()
    - Array.isArray()

- Array.prototype.concat()
    - [...arr, ...brr]

- Array.prototype.forEach()

- Array.prototype.every()
    - Array.prototype.some()

- Array.prototype.fill()

- Array.prototype.find()
    - Array.prototype.findIndex()
    - Array.prototype.includes()
    - Array.prototype.indexOf()
    - Array.prototype.lastIndexOf()

- Array.prototype.filter()
- Array.prototype.map()

- Array.prototype.reduce()
    - Array.prototype.reduceRight()
    ```
    "field1=value1&field2=value2&field3=value3"
        .split("&")
        .map(s=>s.split("="))
        .map(([k,v])=>({[k]:decodeURIComponent(v)}))
        .reduce((agg,x)=>({...agg,...x}))
    ```
    ```
    [...str.matchAll(/([^=&]+)=([^&]+)/g)]
        .reduce((agg,[_,k,v])=>({[k]:decodeURIComponent(v),...agg}),{})
    ```
    ```
    Object.entries(json).map(([k,v])=>k+"="+encodeURIComponent(v)).join("&")
    ```

- Array.prototype.flat()
    - Array.prototype.flatMap()
    ```
    ["1","2","x3x",null,"asdasd"].map(x => {
        try {
            return { value: parseInt(x) };
        } catch (e) {
            return { error: e };
        }
    }).flatMap(({value}) => value || [])
    ```

- Array.prototype.sort()
    - in place
    ```
    [...x.sort((a,b)=>b-a)]
    ```

- Array.prototype.join()
    ```
    "a?b?c".split("?").join("!")
    ```
    ```
    [..."hello"]
    ```

- Array.prototype.slice()
    ```
    arr.slice(-1)
    ```
    ```
    removeIdx = (arr,idx) => [...arr.slice(0,idx),...
    arr.slice(idx+1)]
    ```

- Object.prototype.keys()
- Object.prototype.values()
- Object.prototype.entries()

- Set
    - Map
    - filtering duplicates
    ```
    [...new Set([1,2,3,1,2,3,1,2,3])];
    ```
    - Object.fromEntries(map)

- Promise
    ```
    Promise.all(urls.map(u=>fetch(u)))
        .then(responses => Promise.all(responses.map(res => res.text())))
        .then(texts => {
            console.log(texts)
        })
    ```

## Resources
- https://dzone.com/articles/imperative-vs-declarative-javascript
- https://2ality.com/2015/01/es6-destructuring.html
- https://2ality.com/2017/04/flatmap.html
- https://2ality.com/2015/01/es6-maps-sets.html
- https://www.timsommer.be/declarative-javascript-functions/
- https://medium.com/front-end-weekly/8-steps-to-turn-imperative-javascript-class-to-a-functional-declarative-code-862964faf46c (advanced)

## tasks
- implement your own version of `Array.prototype.map()` using a for loop
- implement `Array.prototype.filter()` using Array.prototype.reduce()
- implement `Array.prototype.every()` using Array.prototype.some()
- implement `Array.prototype.flatFilter()`
- implement `Array.prototype.sort()` using Bubble Sort and Insertion Sort (two versions)
- implement an Object equivalent of map, filter and reduce
- implement `Array.prototype.flatLevel(n)` which also takes an argument of levels to flatten
- implement `Array.prototype.dualReduce(dualReducer,initial)` such that `[1,2,3,4,5,6,7,8,9,10].dualReduce((acc,a,b)=>[...acc,a+b],[]) == [3,7,11,15,19]` and `[1,2,3,4,5,6,7,8,9,10].dualReduce((acc,a,b)=>acc+a*b,0) == 190` and `[..."hello world"].dualReduce((acc,a,b="")=>acc+b.toUpperCase()+a,"") === "EhLl oOwLrd"`. bonus: try making it declarative, no loops
