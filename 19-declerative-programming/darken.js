// converts "rgb(R, G, B)" string to [R, G, B] array
let colorFromRGBString = str => str.replace("rgb(","")
    .replace(")","")
    .split(", ")
    .map(Number);

let computeDarkness = ([r, g, b]) => r + g + b;

// find all rgb stylings
let getAllColorProperties = element => Object.entries(window.getComputedStyle(element))

    // only rgb values
    .filter(([_, value]) => value.startsWith("rgb("))

    // convert rgbString to rgb array
    .map(([property, rgbString]) => [property, colorFromRGBString(rgbString)])

    // convert to {element, property, color} entries
    .map(([property, color]) => ({element, property, color}));


// is some of the element`s children a TEXT_NODE
let includesTextNode = nodes => nodes.some(childNode => childNode.nodeType === Node.TEXT_NODE);


// reduce all R,G,B values by 20%
let darken = color => color.map(x => Math.round(x*0.8));


// get all elements in document
[...document.querySelectorAll("*")]

    // filter out elements with no TEXT_NODE type children
    .filter(e => includesTextNode([...e.childNodes]))
    
    // filter out elements without text content
    .filter(e => e.textContent !== "")
    
    // filter out non displayed elements
    .filter(e => window.getComputedStyle(e).display !== "none")
    
    // convert to [{element, property, color}] and flatten
    .flatMap(e => getAllColorProperties(e))
    
    // sort by color darkness
    .sort(({color: colorA}, {color: colorB}) => computeDarkness(colorA) - computeDarkness(colorB))
    
    // set color to a 20% darker color
    .forEach(({element, property, color}) => {
        const darkColor = darken(color);
        element.style[property] = "rgb(" + darkColor.join(", ") + ")";
    })