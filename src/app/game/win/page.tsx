import React from "react";
import Link from "next/link";
import { PlayButton, WinnerContainer } from "@/lib/styled";

const Home = () => {
    return <WinnerContainer>
        <div>
            <h1>You win!</h1>
            <Link href="/game">
                <PlayButton>
                    Play again!
                </PlayButton>
            </Link>
        </div>
    </WinnerContainer>
}

export default Home;