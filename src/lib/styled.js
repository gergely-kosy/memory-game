"use client";

import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: auto;
  width: 700px;
  height: 830px;
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

    > p {
        text-align: center;
        padding: 0 160px;
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
        height: 700px;
      
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

export const PlayButton = styled.button`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #505050;
  color: #fff;
  padding: 10px 50px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #141414;
    cursor: pointer;
  }
`

export const WinnerContainer = styled.div`
  height: 100%;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 40%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    > a {
      position: relative;
      left: 0;
      right: 0;
      margin: 50px auto;
    }
  }
`

export const ResetButton = styled.button`
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  width: fit-content;
  bottom: -30px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #505050;
  color: #fff;
  padding: 10px 50px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #141414;
    cursor: pointer;
  }
`

export const SetCustomNumbersButton = styled.button`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #505050;
  color: #fff;
  padding: 10px 30px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #141414;
    cursor: pointer;
  }

  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  top: -30px;
`

export const DefaultButton = styled.button`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #505050;
  color: #fff;
  padding: 10px 30px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #141414;
    cursor: pointer;
  }
`

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0 10px;

  > div {
    text-align: center;
    margin-bottom: 25px !important;
    font-size: 14px !important;
  }

  > p {
    color: #dd0000;
    text-align: center;
  }
  > button {
    width: fit-content;
    margin: auto !important;
  }
`

export const ChangeNumberContainer = styled.div`
  display: flex;
  flex-direction: column;

  display: grid;
  grid-template-columns: auto auto auto auto;

  > div {
    height: 120px;
    width: 120px;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    > input {
      font-weight: 600;
      font-size: 35px;
      padding: 10px !important;
      text-align: center !important;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
  }
`

export const ModalTitle = styled.p`
  color: #000;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  width: 40%;
  margin: 20px auto;
`