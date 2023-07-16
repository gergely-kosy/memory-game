"use client";

import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: auto;
  width: 700px;
  height: 700px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #000;
  color: #000;
  position: relative;
`

export const HomeContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    h1 {
        margin: 150px 0 50px 0;
        text-align: center;
    }

    p {
        text-align: center;
    }

    > a {
        margin: auto;
        display: block;
        position: absolute;
        bottom: 100px;
        left: 0;
        right: 0;
        width: fit-content;
    }
`

export const GridContainer = styled.div`
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    right: 0;

    > div {
        display: grid;
        grid-template-columns: auto auto auto auto;
        padding: 50px;
        height: 600px;
      
        .grid-item {
          background-color: rgba(255, 255, 255, 0.8);
          text-align: center;
          height: 100%;
          width: 100%;
          position: relative;
        }
    }
`

export const NumberButton = styled.button`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  height: 120px;
  width: 120px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  p {
    font-weight: 600;
    font-size: 35px;
  }
`