let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
document.getElementById('c1').className = 'button';
document.getElementById('c2').className = 'button';
document.getElementById('c3').className = 'button';
document.getElementById('c4').className = 'button';
document.getElementById('c5').className = 'button';
document.getElementById('c6').className = 'button';
document.getElementById('c7').className = 'button';
document.getElementById('c8').className = 'button';
document.getElementById('c9').className = 'button';
// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl').textContent=(nextPlayer);
//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard() // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
{
    //btns is array
    //buttons is empty array
    let btns = Array.from(document.querySelectorAll('.button'));
    let buttons = [];
    for (let i=0; i<btns.length; i++)
    {
        buttons[i] = document.createElement('BUTTON');
        buttons[i].append("[ ]");
        btns[i].append(buttons[i]);
    }
} 
// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('.button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    event.target.innerHTML=("["+nextPlayer+"]");
    event.target.disabled = true;
    
    if(nextPlayer == 'X'){
        nextPlayer = 'O'
    }else{
        nextPlayer = 'X'
    }
    document.getElementById('next-lbl').textContent=(nextPlayer);

    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
 
    // Check if the game is over
    if (isGameOver())
    {
        let elements = [0,0,0,0,0,0,0,0,0]
        let winner = 'XO'
        let btns = Array.from(document.querySelectorAll('.button'))
        for(let i=0; i<btns.length; i++){
            if(btns[i].textContent == '[X]'){
                elements[i] = 1
            }
        if(elements[0]==1 && elements[3] == 1 && elements[6] == 1){winner = 'X'}
        if(elements[0]==0 && elements[3] == 0 && elements[6] == 0){winner = 'O'}
        if(elements[1]==1 && elements[4] == 1 && elements[7] == 1){winner = 'X'}
        if(elements[1]==0 && elements[4] == 0 && elements[7] == 0){winner = 'O'}
        if(elements[2]==1 && elements[5] == 1 && elements[8] == 1){winner = 'X'}
        if(elements[2]==0 && elements[5] == 0 && elements[8] == 0){winner = 'O'}
        
        if(elements[0]==1 && elements[1] == 1 && elements[2] == 1){winner = 'X'}
        if(elements[0]==0 && elements[1] == 0 && elements[2] == 0){winner = 'O'}
        if(elements[3]==1 && elements[4] == 1 && elements[5] == 1){winner = 'X'}
        if(elements[3]==0 && elements[4] == 0 && elements[5] == 0){winner = 'O'}
        if(elements[6]==1 && elements[7] == 1 && elements[8] == 1){winner = 'X'}
        if(elements[6]==0 && elements[7] == 0 && elements[8] == 0){winner = 'O'}
       
        if(elements[0]==1 && elements[4] == 1 && elements[8] == 1){winner = 'X'}
        if(elements[0]==0 && elements[4] == 0 && elements[8] == 0){winner = 'O'}
        if(elements[2]==1 && elements[4] == 1 && elements[6] == 1){winner = 'X'}
        if(elements[2]==0 && elements[4] == 0 && elements[6] == 0){winner = 'O'}
        
        document.getElementById('game-over-lbl').innerHTML = ("Game Over "+winner+" wins");
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let btns = Array.from(document.querySelectorAll('.button'))
    
    for(let i=0; i<btns.length; i++){
        if(btns[i].textContent == '[ ]'){
            return false
        }
    }
    return true
    
    }
    // This function returns true if all the buttons are disabled and false otherwise 
}
