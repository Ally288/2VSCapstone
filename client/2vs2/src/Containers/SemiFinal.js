import React from "react";
import Game from "../Components/Game/Game";
import { useState } from "react";

const SemiFinal = ({ players, getfinalist1, getfinalist2 }) => {




    return (
        <div id='round'>

            <Game name={"Semi-Final"} player1={players[0]} player2={players[1]} getWinners={getfinalist1} />
            <Game name={"Semi-Final"} player1={players[2]} player2={players[3]} getWinners={getfinalist2} />
        </div>
    )


}

export default SemiFinal;