import React from "react";

const Game1 = ({ player1, player2, name, getWinners }) => {

    const winner1 = () => {
        getWinners(player1)
    }
    const winner2 = () => {
        getWinners(player2)
    }

    return (
        <div id='game'>
            <h2 className="game-title"> {name}</h2>
            <h3>{player1["name"]} vs. {player2["name"]} </h3>
            <button onClick={winner1}>Winner player 1</button>
            <button onClick={winner2}>Winner player 2</button>
        </div>
    )


}

export default Game1;