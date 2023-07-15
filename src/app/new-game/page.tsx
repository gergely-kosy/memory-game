'use client';

import SingleItem from "@/components/SingleItem";
import { GridContainer } from "@/lib/styled";
import React, { useState } from "react";

const NewGame = () => {
  const [previousNumberIndex, setPreviousNumberIndex] = useState<number | null>();
  const [foundNumberIndexes, setFoundNumberIndexes] = useState<number[]>([]);
  const [guessNumberIndexes, setGuessNumberIndexes] = useState<number[]>([]);

  const numbers = [1,2,3,4,5,6,7,8];
  const finalNumbers = [...numbers, ...numbers];


  const checkMatchAndStore = (index: number) => {
    if (previousNumberIndex !== index) {
      const previousNum = handleVisibility(index);
  
      if (!foundNumberIndexes.includes(index)) {
        if ((previousNum === 0 || previousNum) && (finalNumbers[previousNum] === finalNumbers[index])) {
          setFoundNumberIndexes([...foundNumberIndexes, previousNum, index]);
        }
        
        setPreviousNumberIndex(index);
      }
    }
  }

  const handleVisibility = (index: number) => {
    if (guessNumberIndexes.length > 1) {
      setGuessNumberIndexes([index]);
      return null;
    } else {
      setGuessNumberIndexes([...guessNumberIndexes, index]);
      return previousNumberIndex;
    }
  }


  const handleShowNumbers = () => {
    return finalNumbers.map((number, index) => {
      const matched = foundNumberIndexes.includes(index);
      const isVisible = guessNumberIndexes.includes(index);
      
      return <div key={index} className="grid-item">
      <SingleItem number={number} index={index} isVisible={isVisible} matched={matched} checkMatch={checkMatchAndStore} />
    </div>
    })
  }


  return <div>
      <GridContainer>
        {handleShowNumbers()}
      </GridContainer>
  </div>
}

export default NewGame;