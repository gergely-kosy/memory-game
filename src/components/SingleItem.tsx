import { NumberButton } from "@/lib/styled";
import React from "react";

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
    return <NumberButton 
        style={{ 
            background: matched ? 'lightgreen' : isVisible ? '#505050' : '',
            color: matched ? '' : isVisible ? 'white' : '',
            cursor: matched ? '' : 'pointer',
            boxShadow: matched ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : ''
        }} 
        onClick={() => handleOnClick()}>
            <p>
                {matched ? number : isVisible && number}
            </p>
        </NumberButton>
}

export default SingleItem;