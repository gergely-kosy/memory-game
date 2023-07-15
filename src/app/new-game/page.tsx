'use client';

import SingleItem from "@/components/SingleItem";
import { GridContainer } from "@/lib/styled";
import React, { useState } from "react";

const NewGame = () => {
  const [previousNumberIndex, setPreviousNumberIndex] = useState<number | null>();
  const [foundNumberIndexes, setFoundNumberIndexes] = useState<number[]>([]);

  const numbers = [1,2,3,4,5,6,7,8];
  const finalNumbers = [...numbers, ...numbers];


  const checkMatchAndStore = (index: number) => {
    if (previousNumberIndex === 0) {
      setFoundNumberIndexes([...foundNumberIndexes, previousNumberIndex, index]);
    } else if (previousNumberIndex && (finalNumbers[previousNumberIndex] === finalNumbers[index])) {
      setFoundNumberIndexes([...foundNumberIndexes, previousNumberIndex, index]);
    }
    
    setPreviousNumberIndex(index);
  }


  const handleShowNumbers = () => {
    return finalNumbers.map((number, index) => {
      const matched = foundNumberIndexes.includes(index);
      console.log(foundNumberIndexes)
      
      return <div key={index} className="grid-item">
      <SingleItem number={number} index={index} matched={matched} checkMatch={checkMatchAndStore} />
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