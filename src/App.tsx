import React from 'react';
import './App.css';
import THEOLive from "./Player";
import {Player} from "@theolive/player";

function App() {

    async function handlePlayer(player: Player) {
        await player.loadChannel("production")
    }

    return (
        <>
            <header className="container">
                <h1>THEOLive example</h1>
            </header>
            <main className="container">
                <THEOLive onPlayer={handlePlayer} />
            </main>
        </>
    );
}

export default App;
