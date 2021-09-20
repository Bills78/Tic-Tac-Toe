const body = document.querySelector('body');

const player = (marker) => {
    return {marker}
};

const player1 = player('X');
const player2 = player('O');

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

const flow = (() => {

    const draw = () => {
        for(let i = 0; i < gameBoard().squares.length; i++) {
            if (gameBoard().squares[i] === player1.marker ||
                gameBoard().squares[i] === player2.marker) {
                    const h2 = document.createElement('h2');
                    h2.classList.add('winner');
                    h2.textContent = 'Draw!';
                    body.append(h2);
                }
        }
    }

    const winOptionsX = (num1, num2, num3) => {
        if (gameBoard().squares[num1].innerText === player1.marker && 
        gameBoard().squares[num2].innerText === player1.marker && 
        gameBoard().squares[num3].innerText === player1.marker) {
        const h2 = document.createElement('h2');
        h2.classList.add('winner');
        h2.textContent = 'X is Winner!';
        body.append(h2);
        }
    }
    const winOptionsO = (num1, num2, num3) => {
        if (gameBoard().squares[num1].innerText === player2.marker && 
        gameBoard().squares[num2].innerText === player2.marker && 
        gameBoard().squares[num3].innerText === player2.marker) {
        const h2 = document.createElement('h2');
        h2.classList.add('winner');
        h2.textContent = 'O is Winner!';
        body.append(h2);
        } 
    }

    const winner = () => {
        winOptionsX(0, 1, 2);
        winOptionsX(3, 4, 5);
        winOptionsX(6, 7, 8);
        winOptionsX(0, 3, 6);
        winOptionsX(1, 4, 7);
        winOptionsX(2, 5, 8);
        winOptionsX(0, 4, 8);
        winOptionsX(2, 4, 6);

        winOptionsO(0, 1, 2);
        winOptionsO(3, 4, 5);
        winOptionsO(6, 7, 8);
        winOptionsO(0, 3, 6);
        winOptionsO(1, 4, 7);
        winOptionsO(2, 5, 8);
        winOptionsO(0, 4, 8);
        winOptionsO(2, 4, 6);
    };

    let sqrContent = player1.marker;

    gameBoard().squares.forEach(square => {
            square.addEventListener('click', () => {
                square.textContent = sqrContent;
                if (sqrContent == player1.marker) {
                    sqrContent = player2.marker
                } else {
                    sqrContent = player1.marker
                }
                winner();
                draw();
            })
        });

    return { winner }
})();