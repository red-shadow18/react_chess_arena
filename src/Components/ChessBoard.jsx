import React,{useState} from "react";
import BoardSetup from "./BoardSetup";
import styled from "@emotion/styled";
import BoardSetupBackground from "../asset/images/Background/BoardSetupBg.png";
import Heading from "./Heading";

const ChessboardWrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
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
    const [currentState, setCurrentState]=useState("gameSetup")

    const states={
        "gameSetup":<BoardSetup currentState={currentState}/>,
        "gamePlay":"",
        "gameReport":""
    }

    
    return (
        <ChessboardWrapper>
            {
                states[currentState]
            }
         
        </ChessboardWrapper>
    )
}

export default ChessBoard;