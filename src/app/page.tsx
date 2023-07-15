import React from "react";
import { HomeContainer } from '../lib/styled'
import Link from "next/link";

const Home = () => {
    return <HomeContainer>
        <h1>Game instructions</h1>
        <p>Description...</p>
        <Link href="/new-game">Play</Link>
    </HomeContainer>
}

export default Home;