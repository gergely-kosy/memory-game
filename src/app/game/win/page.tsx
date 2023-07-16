import React from "react";
import Link from "next/link";

const Home = () => {
    return <div>
        <h1>You won!</h1>
        <Link href="/game">Play again!</Link>
    </div>
}

export default Home;