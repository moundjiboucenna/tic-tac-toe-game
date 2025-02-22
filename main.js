let title = document.querySelector(".title");
let turn = "x";
let squares = [];

function game(id) {
    let element = document.getElementById(id)
    if (turn == "x" && element.innerHTML == "") {
        element.innerHTML = "X";
        turn = "o";
        title.innerHTML = "O Turn";
    } else if (turn == "o" && element.innerHTML == "") {
        element.innerHTML = "O";
        turn = "x";
        title.innerHTML = "X Turn";
    }
    winner();
}

function end (num1, num2, num3) {
    title.innerHTML = `${squares[num1]} is the winner`;
    document.getElementById("item" + num1).style.background = "black"
    document.getElementById("item" + num2).style.background = "black"
    document.getElementById("item" + num3).style.background = "black"
    setInterval(function(){title.innerHTML += '.'}, 1000)
    setTimeout(function(){location.reload()}, 3000)
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }

    const winPositions = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];
    
    for (let position of winPositions) {
        let [a, b, c] = position;
        if (squares[a] == squares[b] && squares[a] == squares[c] && squares[a] != "") {
            end(a, b, c);
            return;
        }
    }
    
    if (squares.slice(1).every(square => square != "")) {
        title.innerHTML = "Draw! No winner";
        setInterval(function(){title.innerHTML += '.'}, 1000)
        setTimeout(function(){ location.reload(); }, 3000);
    }
}