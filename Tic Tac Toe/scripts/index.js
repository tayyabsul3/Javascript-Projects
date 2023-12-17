const buttonElement = document.getElementsByClassName('Js-playermove');
const game = document.querySelector('.game');
const res = document.querySelector('.res');
const tossButton = document.querySelector('.js-tossButton');
const toss = document.querySelector('.toss');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const greet = document.querySelector('.greet')
const xpoint = document.querySelector('.xscore');
const opoint = document.querySelector('.oscore');

// DECLARATION OF VARIABLES
let boxLeft = 9;
let matrix = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
];
const player1 = 'X';
const player2 = 'O';
let move;
let result = '';
let oscore = 0;
let xscore = 0;


// Accession EACH Button (MAIN FUNCTION);
for (let i = 0; i < buttonElement.length; i++) {
    buttonElement[i].addEventListener('click', () => {
        boxLeft--;
 
        if (move === 'p1') {

            buttonElement[i].innerHTML = player1;
            arrayUpdate(i, move);
            move = 'p2';
        }
        else if (move === 'p2') {
            console.log(i + '  ');
            buttonElement[i].innerHTML = player2;
            arrayUpdate(i, move);
            move = 'p1';
        }
        if (move === 'p1') {
            right.classList.add('opacity')
            left.classList.remove('opacity');
        }
        else {
            left.classList.add('opacity')
            right.classList.remove('opacity');
        }

        if (boxLeft > 0 && boxLeft < 5) {
            if (gameResult()) {
                console.log('running result function')
                res.innerHTML = 'RESULT : ' + result;
                if(result === 'X won')
                {
                    xscore++;
                }
                else if (result === 'O won')
                {
                    oscore++;
                }
                scoreUpdate();
                setTimeout(() => {
                    boxLeft=9;
                    if(!right.classList.contains('opacity'))
                    right.classList.add('opacity');
                else if(! left.classList.contains('opacity'))
                    left.classList.add('opacity');
                
                    reset();
                   
                }, 3000);

            }


        }
    });
}



tossButton.addEventListener('click', () => {

    game.classList.add('display');
    greet.classList.add('notdisplay');
    tossButton.classList.add('notdisplay');
    moveShifter();
});



function scoreUpdate()
{
    xpoint.innerHTML = xscore;
    opoint.innerHTML = oscore;
}
function reset()
{
    matrix = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];
    for (let i = 0; i < buttonElement.length; i++) {
    buttonElement[i].innerHTML = '_';
    }
    tossButton.classList.remove('notdisplay');
   
}
function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 5) {
        computerMove = 'p1';
    }
    else if (randomNumber >= 1 / 5 && randomNumber < 1) {
        computerMove = 'p2';
    }

    return computerMove;
}

function moveShifter() {

    move = pickComputerMove();
    if (move === 'p1') {
        right.classList.add('opacity')
        left.classList.remove('opacity');
    }
    else {
        left.classList.add('opacity')
        right.classList.remove('opacity');
    }
}
function arrayUpdate(i, move) {
    let push;
    if (move === 'p1') {
        push = player1;
    }
    else {
        push = player2;
    }

    if (i === 0) {
        matrix[0][0] = push;
    } else if (i === 1) {
        matrix[0][1] = push;
    } else if (i === 2) {
        matrix[0][2] = push;
    } else if (i === 3) {
        matrix[1][0] = push;
    } else if (i === 4) {
        matrix[1][1] = push;
    } else if (i === 5) {
        matrix[1][2] = push;
    } else if (i === 6) {
        matrix[2][0] = push;
    } else if (i === 7) {
        matrix[2][1] = push;
    } else if (i === 8) {
        matrix[2][2] = push;
    }


}
function gameResult() {
    console.log('gameresult function');


    if (rightdiagonalSearch()) {
        return true;
    }
    else if (leftdiagonalSearch()) {
        return true;
    }
    else if (rowSearch()) {
        return true;
    }
    else if (colSearch()) {
        return true;
    }
    return false;

}


function rightdiagonalSearch() {
    let diagonalx = 0;
    let diagonalo = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === j) {
                if (matrix[i][j] === 'X') {
                    diagonalx++;
                }
                else if (matrix[i][j] === 'O') {
                    diagonalo++;
                }

                if (diagonalo === 3) {
                    result = 'O won';
                    return result;

                }
                else if (diagonalx === 3) {
                    result = 'X won'
                    return result;
                }
            }

        }

    }
}


function leftdiagonalSearch() {

    let diagonalx = 0;
    let diagonalo = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i + j === 2) {
                if (matrix[i][j] === 'X') {
                    diagonalx++;
                }
                else if (matrix[i][j] === 'O') {
                    diagonalo++;
                }

                if (diagonalo === 3) {
                    result = 'O won'
                    return result;
                }
                else if (diagonalx === 3) {
                    result = 'X won'
                    return result;
                }
            }

        }

    }
}


function rowSearch() {

    let value = false;
    for (let i = 0; i < 3; i++) {
        if (rowSearch2(i)) {
            value = true;
            break;
        }
    }



    return value;
}
function rowSearch2(i) {
    let rowx = 0;
    let rowo = 0;
    for (let j = 0; j < 3; j++) {
        if (matrix[i][j] === 'X') {
            rowx++;

        }
        else if (matrix[i][j] === 'O') {

            rowo++;

        }
        console.log(matrix[i][j]);
        if (rowo === 3 || rowx === 3) {
            break;
        }
    }
    console.log('running');
    if (rowo === 3) {
        result = 'O won';
        console.log(result);
        return true;
    }
    else if (rowx === 3) {
        result = 'X won';
        console.log(result + 'one');
        return true;

    }
}


function colSearch() {
    let value = false
    for (let j = 0; j < 3; j++) {
        if (colSearch2(j)) {
            value = true;
            break;
        }
    }
    return value;

}
function colSearch2(j) {
    let colx = 0;
    let colo = 0;
    for (let i = 0; i < 3; i++) {
        if (matrix[i][j] === 'X') {
            colx++;

        }
        else if (matrix[i][j] === 'O') {

            colo++;

        }
        console.log(matrix[i][j]);
        if (colo === 3 || colx === 3) {
            break;
        }
    }
    console.log('running');
    if (colo === 3) {
        result = 'O won';
        console.log(result);
        return true;
    }
    else if (colx === 3) {
        result = 'X won';
        console.log(result + 'one');
        return true;

    }
}