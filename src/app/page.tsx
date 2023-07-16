import React from "react";
import { HomeContainer, PlayButton } from '../lib/styled'
import Link from "next/link";

const Home = () => {
    return <HomeContainer>
        <h1>Game instructions</h1>
        <p>Praesent elementum id enim dapibus dictum. Donec in enim mi. Duis id viverra odio. Mauris facilisis lectus sed pellentesque molestie. Curabitur maximus a erat ac lobortis. Integer bibendum bibendum eros, nec sagittis nunc consequat quis. Duis in arcu dolor.</p>
        <Link href="/game">
            <PlayButton>
                Play
            </PlayButton>
        </Link>
    </HomeContainer>
}

export default Home;