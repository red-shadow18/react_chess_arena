import React from "react";
import BoardSetup from "./BoardSetup";
import GamePlay from "./GamePlay";
import styled from "@emotion/styled";
import BoardSetupBackground from "../asset/images/Background/BoardSetupBg.png";
import {useSelector } from "react-redux";

const ChessGameWrapper=styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
height:100vh;

&:before{
    content:"";
    width:100%;
    height:100%;
    background-image:url(${BoardSetupBackground});
    background-repeat:no-repeat;
    background-size: cover;
    position:absolute;
    z-index:-2;
    opacity:.75;
}

    
`

// const boardTypes=[1,2,3]

// const tokenTypes=[1,2,3]

const ChessBoard=()=>{
    const currentGameState=useSelector(state=>state.currentGameState)

    const states={
        "gameSetup":<BoardSetup/>,
        "gamePlay":<GamePlay/>,
        "gameReport":""
    }


    
    return (
        <ChessGameWrapper>
            {
                states[currentGameState]
            }
         
        </ChessGameWrapper>
    )
}

export default ChessBoard;