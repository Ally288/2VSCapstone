import React from "react";
import { useState, useEffect } from "react";
import Final from "./Final";
import SemiFinal from "./SemiFinal";


const MainContainer = () => {

    const [players, setPlayers] = useState([{}])

    useEffect(() => {
        getPlayers()
    }, [])

    const getPlayers = () => {
        fetch("http:///localhost:8080/api/players")
        .then(res => res.json())
        .then(playersData => setPlayers(playersData))
    }

    return (
        <div id='tournament'>
        <SemiFinal players={players}/>
        <Final />
        </div>
        
    )

}

export default MainContainer;