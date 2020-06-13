console.log("Let's learn about innerHTML!")

//Target the div boxes
//Turn the item nodelist into an array
const item = Array.prototype.slice.call(document.querySelectorAll('.item'));
const thing = document.querySelector('#thing');

//set variables for image attributes
const width = 500
const src = `https://picsum.photos/${width}`
const desc = `random photo`

//set a template for html injection
const html = `
    <h2>A sweet ${desc}</h2>
    <img alt="${desc}" src="${src}" width="${width}">
`;

//set the html for each item in the item array
item.forEach(function(item){
    item.innerHTML = html
})

//set the html for the thing id
thing.innerHTML = html
console.log(html);

//innerhtml actually returns a string, not actual elements. 
//Here's a way to turn the string returned by innerHTML into real elements:

const range = document.createRange();
console.log(range);
//I'm still not super clear on what this document.createRange() is doing.

const fragment = range.createContextualFragment(html);
console.log(fragment);
//But I CAN see that .createContextualFragment seems to be returning a string of html to actual elements.
//It's kind of like the opposite of .toString()

console.log(fragment.querySelector('img'))

//stick yr new html onto the DOM
document.body.appendChild(fragment);


