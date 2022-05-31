const grid = document.querySelector('.grid');
let gridSize = 16;

let myFlex = (100 / gridSize);

function createGrid(myGridSize) {
    for (let i = 0; i < myGridSize; i++) {
        for (let l = 0; l < myGridSize; l++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'box';
            newDiv.style.flex = myFlex + "%";
            grid.appendChild(newDiv);
        }
    }
}

createGrid(gridSize);



let boxes = document.querySelectorAll('.box');

function changeColor(item) {
    item.addEventListener('mouseover', () => {
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255); 
        item.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;  
    });
}

boxes.forEach(changeColor);

const changeSize = document.querySelector('.size');
const resetButton = document.querySelector('.reset');

changeSize.addEventListener('click', () => {
    let newSize = prompt("What size would you like?");
    grid.textContent = '';
    gridSize = newSize;
    myFlex = (100 / gridSize);
    createGrid(gridSize);
    boxes = document.querySelectorAll('.box');
    boxes.forEach(changeColor);
})

resetButton.addEventListener('click', () => {
    grid.textContent = '';
    createGrid(gridSize);
    boxes = document.querySelectorAll('.box');
    boxes.forEach(changeColor);
})