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
`

export const HomeContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    h1 {
        margin-top: 150px;
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
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: rgb(239 239 239);
  padding: 40px;
  height: 500px;
  border: 1px solid black;

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    text-align: center;
    height: 100%;
    width: 100%;
  }

  button {
    width: 100%;
    height: 100%;
  }
`