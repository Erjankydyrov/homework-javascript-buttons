function printLine(text) {
    document.write("<br>" + text);
}
// br

// homework

let h1 = document.createElement('h1');
h1.innerText = "0";
let size = 32;
document.body.append(h1);
let conteiner = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let ul = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "Example";
    button.id = "example" + i;
    li.className = "ulli";

    li.append(button);
    ul.append(li);
}

document.body.append(ul);

// ++
let example4 = document.querySelector("#example4");
example4.innerText = "+";

example4.addEventListener('click', function () {
    conteiner ++;
    h1.innerText = conteiner;
});
// ++

// --
let example5 = document.querySelector("#example5");
example5.innerText = "-";

example5.addEventListener('click', function () {
    conteiner --;
    h1.innerText = conteiner;
});
// --

// size ++
let example2 = document.querySelector("#example2");
example2.innerText = "Size +";

example2.addEventListener('click', function () {
    size++;
    h1.style.fontSize = size + "px";
});
// size ++

// size --
let example3 = document.querySelector("#example3");
example3.innerText = "Size -";

example3.addEventListener('click', function () {
    size--;
    h1.style.fontSize = size + "px";
});
// size --

// random colors
let example1 = document.querySelector("#example1");
example1.innerText = "Random-colors";

example1.addEventListener('click', function() {
    h1.style.color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
});
// random colors

// styles
h1.style.maxWidth = '100px';
h1.style.textAlign = 'center';
h1.style.margin = '0 auto';
h1.style.marginBottom = "15px";
ul.style.maxWidth = '150px';
ul.style.margin = " 0 auto";
ul.style.listStyleType = "none";
ul.style.padding = "0";
// styles