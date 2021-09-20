const body = document.querySelector('body');

const gameBoard = () => {
    let squares = new Array(9);
    
    const makeBoard = () => {
        const field = document.createElement('div');
        field.classList.add('field');
        let id = 1;
        for(let i = 0; i < squares.length; i++) {
            let square = document.createElement('div');
            square.setAttribute('id', `${id++}`)
            square.classList.add('sqr');
            field.append(square);
        }
        body.append(field)
    }
    return {
        squares,
        makeBoard
    };
};

gameBoard().makeBoard();

const player = (marker) => {
    return {marker}
};

const player1 = player('X');
const player2 = player('O');

const flow = (() => {
    let square1 = document.getElementById('1');
    let square2 = document.getElementById('2');
    let square3 = document.getElementById('3');
    let square4 = document.getElementById('4');
    let square5 = document.getElementById('5');
    let square6 = document.getElementById('6');
    let square7 = document.getElementById('7');
    let square8 = document.getElementById('8');
    let square9 = document.getElementById('9');

    let sqrContent = player1.marker;

    const listener = ((sqr) => {
        sqr.addEventListener('click', () => {
            sqr.textContent = sqrContent;
            if (sqrContent == player1.marker) {
                sqrContent = player2.marker
            } else {
                sqrContent = player1.marker
            }
        })
    })

    listener(square1);
    listener(square2);
    listener(square3);
    listener(square4);
    listener(square5);
    listener(square6);
    listener(square7);
    listener(square8);
    listener(square9);
})();