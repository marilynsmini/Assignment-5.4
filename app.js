const items = ["grapes", "bananas", "oranges", "dragon fruit", "kiwis", "apples"];
const changeColor = document.querySelector(".changeColor");

for (name of items) {
    console.log(name);
    if (name === "dragon fruit") {
        console.log("Yay! HEB had dragon fruit today!");
        break;
    }
}

let count = 0;
let item = 0;

while (count < 10) {
    count++;
    item += count;
    console.log("You've hit your max count.")
}

const text = document.querySelector(".title");
const color = document.querySelector(".color");


text.classList.add("change");

    

