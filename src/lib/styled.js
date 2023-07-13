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

    > button {
        margin: auto;
        display: block;
        position: absolute;
        bottom: 100px;
        left: 0;
        right: 0;
        width: fit-content;
    }
`