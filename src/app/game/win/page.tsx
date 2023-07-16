import React from "react";
import Link from "next/link";
import { PlayButton, WinnerContainer } from "@/lib/styled";

const Home = () => {
    return <WinnerContainer>
        <div>
            <div>
                    <div><div><p>You</p></div></div>
                    <div><div><p>win</p></div></div>
                    <div><div><p>!</p></div></div>
            </div>
            <Link href="/game">
                <PlayButton>
                    Play again!
                </PlayButton>
            </Link>
        </div>
    </WinnerContainer>
}

export default Home;