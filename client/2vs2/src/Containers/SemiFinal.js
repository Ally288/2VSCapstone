import React from "react";
import Game from "../Components/Game/Game";
import { useState } from "react";

const SemiFinal = ({players}) => {


    return (
        <div id='round'>
            <h1>{players[0]["name"]} </h1>
        <Game players ={players}/>
        </div>
    )


}

export default SemiFinal;