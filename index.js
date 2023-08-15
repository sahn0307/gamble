//GAMBLING GAME
import m from "mithril"

function playGame(){
    // function to roll a d6
    function roll6() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // function to roll a d20
    function roll20() {
        return Math.floor(Math.random() * 20) + 1;
    } 
    // player starting scores
    let player1Score = 0;
    let player2Score = 0;
    let player3Score = 10.5;

    // dice rolls
    let r1 = roll6()
    let r2 = roll6()
    let r3 = roll6()
    player1Score = r1 + r2 + r3;
    player2Score = roll20();

    // figuring out the winner
    let winner = "";
    if (player1Score > player2Score && player1Score > player3Score) {
        winner = "3d6 wins!";
    } else if (player2Score > player1Score && player2Score > player3Score) {
        winner = "d20 wins!";
    } else if (player3Score > player1Score && player3Score > player2Score) {
        winner = "10.5 wins!";
    } else {
        winner = "It's a tie!";
    }
    let resultP1 = `3d6 Score: ${player1Score} (${r1},${r2},${r3})`
    let resultP2 = `d20 Score: ${player2Score}`
    let resultP3 = `10.5 score: ${player3Score}`
    m.render(document.body, m("main", [
        m('h1', 'Dice Roll Game'),
        m('div', resultP1),
        m('div', resultP2),
        m('div', resultP3),
        m('div', winner),
        m("button", {
            onclick: playGame
        }, "Roll again")
    ]));
}

playGame()