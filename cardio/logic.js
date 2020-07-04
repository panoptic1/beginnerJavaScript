console.log("Let's do some cardio!")

// Make a div
const div1 = document.createElement(`div`);

// add a class of wrapper to it
div1.classList.add('wrapper');

// put it into the body
document.body.appendChild(div1);

// make an unordered list
const ul = document.createElement(`ul`);
// add three list items with the words "one, two three" in them
ul.innerHTML = `
<li>one</li>
<li>two</li>
<li>three</li>
`;

// put that list into the above wrapper
document.querySelector('.wrapper').appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = `https://source.unsplash.com/random`;

// set the width to 250
img.width = '250';

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = "cute puppy"

// Append that image to the wrapper
document.querySelector('.wrapper').appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const div2 = document.createElement(`div`);

div2.innerHTML = `
    <p>Here is a paragraph</p>
    <p>Here is another paragraph</p>
`;

// put this div before the unordered list from above
div1.before(div2);

// add a class to the second paragraph called warning
paragraphs = document.querySelectorAll(`p`);
paragraphs[1].classList.add(`warning`);
console.log(paragraphs[1]);

// remove the first paragraph
paragraphs[0].remove();


// create a function called generatePlayerCard that takes in three arguments: name, age, and height
var generatePlayerCard = function(name, age, height){
    // have that function return html that looks like this:
    // <div class="playerCard">
    const playerCard = document.createElement(`div`)
    //   <h2>NAME — AGE</h2>
    //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    // </div>

    playerCard.classList.add(`player-card`)

    playerCard.innerHTML = `
    <h2> ${name} - ${age}</h2>
    <p> They are ${height} and ${age} years old. In Dog years this person would be ` + (age * 7) +`. Wow!
    <button class="delete">Delete</button>
    `
    return playerCard; 
}

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
console.log(cardsDiv);

// Have that function make 4 cards
var ryan = generatePlayerCard(`Ryan`, `37`, `6'2"`);
var jazmin = generatePlayerCard(`Jazmin`, `32`, `5'0"`);
var damon = generatePlayerCard(`Damon`, `3`, `3'3"`);
var roz = generatePlayerCard(`Roz`, `1`, `2'2"`);

// append those cards to the div
cardsDiv.appendChild(ryan, jazmin, damon, roz);

var family = [ryan, jazmin, damon, roz];

family.forEach(member => cardsDiv.appendChild(member));

console.log(cardsDiv);

// put the div into the DOM just before the wrapper element
div1.before(cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
var deleteButtons = document.querySelectorAll(".delete");

var removeCard = function (button){
    var button = event.target;
    var target = button.closest(`.player-card`);
    target.remove();
}

deleteButtons.forEach(button => button.addEventListener(`click`, removeCard))




// select all the buttons!
// make out delete function
// loop over them and attach a listener