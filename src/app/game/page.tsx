'use client';

import SingleItem from "@/components/SingleItem";
import { GridContainer, ResetButton } from "@/lib/styled";
import React, { useEffect, useState } from "react";
import { redirect } from 'next/navigation'


const NewGame = () => {
  const [previousNumberIndex, setPreviousNumberIndex] = useState<number | null>();
  const [guessNumberIndexes, setGuessNumberIndexes] = useState<number[]>([]);

  const [foundNumberIndexes, setFoundNumberIndexes] = useState<number[]>(() => {
    const foundNumbersStatus = localStorage.getItem("foundNumberIndexes");
    const initialValue = foundNumbersStatus && JSON.parse(foundNumbersStatus);

    return initialValue || []
  });

  
  const numbers = [1,2,3,4,5,6,7,8];
  const [finalNumbers, setFinalNumbers] = useState<number[]>(() => {
    const finalNumbersStatus = localStorage.getItem("finalNumbers");
    const initialValue = finalNumbersStatus && JSON.parse(finalNumbersStatus);

    return initialValue || [...numbers, ...numbers]
  });

  
  useEffect(() => {
    const foundNumbersStatus = localStorage.getItem("foundNumberIndexes");
    const foundNumbers = foundNumbersStatus && JSON.parse(foundNumbersStatus);

    if (!foundNumbers || foundNumbers.length === 0) {
      shuffle();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("foundNumberIndexes", JSON.stringify(foundNumberIndexes));

    if (foundNumberIndexes.length === 16) {
      resetProgress();
      redirect("/game/win");
    }
  }, [foundNumberIndexes])

  const resetProgress = () => {
    localStorage.removeItem("foundNumberIndexes");
    localStorage.removeItem("finalNumbers");
  }

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
    localStorage.setItem("finalNumbers", JSON.stringify(tempArray));
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

  const reset = () => {
    resetProgress();
    window.location.reload();
  }


  return <GridContainer>
      <div>
        {handleShowNumbers()}
      </div>
      <ResetButton onClick={reset}>
          Reset
      </ResetButton>
  </GridContainer>
}

export default NewGame;