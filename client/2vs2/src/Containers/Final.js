import React from "react";
import Game from "../Components/Game/Game";

const Final = ({ finalists1, finalists2 }) => {

    return (
        <div id="round">
            <Game name={"Final"} player1={finalists1} player2={finalists2} />
        </div>
    )


}

export default Final;