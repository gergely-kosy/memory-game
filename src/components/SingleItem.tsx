import React, { useState } from "react";

const SingleItem = ({ number, index, isVisible, matched, checkMatch }: 
    { 
        number: number, 
        index: number, 
        isVisible: boolean, 
        matched: boolean, 
        checkMatch: any 
    }) => {

    const handleOnClick = () => {
        checkMatch(index);
    }
    return <button style={{ background: matched ? 'lightgreen' : '' }} onClick={() => handleOnClick()}>
            {matched ? number : isVisible && number}
        </button>
}

export default SingleItem;