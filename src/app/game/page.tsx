'use client';

import SingleItem from "@/components/SingleItem";
import { GridContainer } from "@/lib/styled";
import React, { useEffect, useState } from "react";

const NewGame = () => {
  const [previousNumberIndex, setPreviousNumberIndex] = useState<number | null>();
  const [foundNumberIndexes, setFoundNumberIndexes] = useState<number[]>([]);
  const [guessNumberIndexes, setGuessNumberIndexes] = useState<number[]>([]);
  
  const numbers = [1,2,3,4,5,6,7,8];
  const [finalNumbers, setFinalNumbers] = useState<number[]>([...numbers, ...numbers]);

  useEffect(() => {
    shuffle();
  }, []);

  const shuffle = () => {
    let tempArray = [...finalNumbers];
    let currentIndex = tempArray.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [tempArray[currentIndex], tempArray[randomIndex]] = [
        tempArray[randomIndex], tempArray[currentIndex]];
    }
    setFinalNumbers(tempArray)
  }



  const checkMatchAndStore = (index: number) => {
    if (previousNumberIndex !== index) {
      const previousNum = handleVisibility(index);
  
      if (!foundNumberIndexes.includes(index)) {
        if (finalNumbers && (previousNum === 0 || previousNum) && (finalNumbers[previousNum] === finalNumbers[index])) {
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
    return finalNumbers?.map((number, index) => {
      const matched = foundNumberIndexes.includes(index);
      const isVisible = guessNumberIndexes.includes(index);
      
      return <div key={index} className="grid-item">
      <SingleItem number={number} index={index} isVisible={isVisible} matched={matched} checkMatch={checkMatchAndStore} />
    </div>
    })
  }


  return <GridContainer>
      <div>
        {handleShowNumbers()}
      </div>
  </GridContainer>
}

export default NewGame;