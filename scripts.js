function printLine(text) {
    document.write("<br>" + text);
}
// br

// homework

let h1 = document.createElement('h1');
h1.innerText = "0";
let size = 16;
document.body.append(h1);
let conteiner = 0;

let ul = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "Example";
    button.id = "example" + i;

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

// size ++