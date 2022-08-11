import React from "react";
import { useState, useEffect } from "react";
import Final from "./Final";
import SemiFinal from "./SemiFinal";


const MainContainer = () => {

    const [players, setPlayers] = useState([{ name: "Player 1" }, { name: "Player2" }, { name: "Player 3" }, { name: "Player 4" }])
    const [finalists1, setFinalist1] = useState({ name: "Winner of Semi-Final 1" })
    const [finalists2, setFinalist2] = useState({ name: "Winner of Semi-Final 1" })



    useEffect(() => {
        getPlayers()
    }, [])

    const getPlayers = () => {
        fetch("http:///localhost:8080/api/players")
            .then(res => res.json())
            .then(playersData => setPlayers(playersData))
    }

    const getfinalist1 = (finalists1) => {
        setFinalist1(finalists1)
    }
    const getfinalist2 = (finalists2) => {
        setFinalist2(finalists2)
    }


    return (
        <div id='tournament'>
            <SemiFinal players={players} getfinalist1={getfinalist1} getfinalist2={getfinalist2} />
            <Final finalists1={finalists1} finalists2={finalists2} />
        </div>

    )

}

export default MainContainer;