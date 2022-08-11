import React from "react";

const Game = ({player1, player2}) => {

    // const playeJSON.stringify(player1)

    // console.log(player1)

    // for (const [key, value] of Object.entries(player1)) 
    //     console.log(`${key}: ${value}`);


    return (
        <div id='game'>
        <h2 className="game-title"> Final</h2>
        <h3 className="players"> {player1["name"]} vs {player2["name"]} </h3>
        </div>
    )


}

export default Game;