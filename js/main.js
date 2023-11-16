'use strict';
// VARIABLES



let points = 0;




// FUNCTIONS:
// board generator:

function boardGen(){
const elementBoard = document.querySelector('div.board');


    for( let i= 1; i <= 100; i++){

        const elementCell = document.createElement('div');    
        elementBoard.append(elementCell);
        elementCell.classList.add("cell");
        elementCell.append(i);
        // blue cells on click
        elementCell.addEventListener('click', function () {
            console.log(elementCell.innerHTML);
            elementCell.classList.add('blue');
})
        
}
}
function campoMinato(){

}
       
// BOMBS ARRAY:
const bombsArray = (Array.from({length: 16}, () => Math.floor(Math.random() * 100)));
console.log(bombsArray);
