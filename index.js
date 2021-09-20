const body = document.querySelector('body');

const gameBoard = () => {
    const makeBoard = () => {
        const field = document.createElement('div');
        field.classList.add('field');
        let id = 1;
        for(let i = 0; i < 9; i++) {
            let square = document.createElement('div');
            square.setAttribute('id', `${id++}`)
            square.classList.add('sqr');
            field.append(square);
        }
        body.append(field)
    }

    let squares = [
        document.getElementById('1'),
        document.getElementById('2'),
        document.getElementById('3'),
        document.getElementById('4'),
        document.getElementById('5'),
        document.getElementById('6'),
        document.getElementById('7'),
        document.getElementById('8'),
        document.getElementById('9')
    ];  

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
    let sqrContent = player1.marker;
    gameBoard().squares.forEach(square => {
        square.addEventListener('click', () => {
            square.textContent = sqrContent;
            if (sqrContent == player1.marker) {
                sqrContent = player2.marker
            } else {
                sqrContent = player1.marker
            }
        })
    });

    const winnerX = () => {
        if (gameBoard().squares[0].innerText === player1.marker && 
            gameBoard().squares[1].innerText === player1.marker && 
            gameBoard().squares[2].innerText === player1.marker) {
            console.log('winner is x')
        }
    }
    
    return { winnerX }
})();

flow.winnerX();