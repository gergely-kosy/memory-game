import React, { useState } from "react";

const SingleItem = ({ number, index, matched, checkMatch }: { number: number, index: number, matched: boolean, checkMatch: any }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleOnClick = () => {
        setIsVisible(!isVisible);
        checkMatch(index);
    }
    return <button style={{ background: matched ? 'yellow' : '' }} onClick={() => handleOnClick()}>
            {isVisible && number}
        </button>
}

export default SingleItem;