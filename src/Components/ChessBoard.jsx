import React from "react";
import BoardSetup from "./BoardSetup";
import GamePlay from "./GamePlay";
import styled from "@emotion/styled";
import BoardSetupBackground from "../asset/images/Background/BoardSetupBg.png";
import {useSelector, useDispatch} from "react-redux";
import { changeBackgroundImageLoadingStatus } from "../redux/action";



// const boardTypes=[1,2,3]

// const tokenTypes=[1,2,3]

const bgImage= new Image()
bgImage.src=BoardSetupBackground




const ChessBoard=()=>{
    const currentGameState=useSelector(state=>state.currentGameState)
    const bgImageLoadingStatus=useSelector(state=>state.bgImageLoading)
    const dispatch=useDispatch()
    bgImage.onload=()=>{
    dispatch(changeBackgroundImageLoadingStatus(false))
}

    const states={
        "gameSetup":<BoardSetup/>,
        "gamePlay":<GamePlay/>,
        "gameReport":""
    }


    
    return (
        <ChessGameWrapper>
            {
               !bgImageLoadingStatus && states[currentGameState]
            }
         
        </ChessGameWrapper>
    )
}

const ChessGameWrapper=styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
height:100vh;

&:before{
    content:"";
    width:100%;
    height:100%;
    background-image:url(${bgImage.src});
    background-repeat:no-repeat;
    background-size: cover;
    position:absolute;
    z-index:-2;
    opacity:.75;
}

    
`

export default ChessBoard;