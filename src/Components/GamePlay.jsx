import React from "react";
import styled from "@emotion/styled";


const allChessSquares=[]
//const horizontalAxis=["A","B","C","D","E","F","G","H"]
const horizontalAxis=[1,2,3,4,5,6,7,8]
const verticalAxis=[8,7,6,5,4,3,2,1]
const chessSquaresCreater=()=>{
    for (let i of horizontalAxis){
        for (let j of verticalAxis){
            allChessSquares.push([i,j])
        }
    }
}

chessSquaresCreater()

const squareColorFinder=(x,y)=>{
    if((x+y)%2===0){
        return "blackBackground"
    }else {
        return "whiteBackground"
    }

}


const GamePlay=()=>{
    return (
        <ChessBoardWrapper>
            <div className="squareBoard">
                {
                    allChessSquares.map((square, index)=><div key={index} className={`individualSquare ${squareColorFinder(square[0], square[1])}`}></div>)
                }
            </div>
        </ChessBoardWrapper>
    )
}

const ChessBoardWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height:100vh;
    width:100%;
    box-sizing:border-box;

    .squareBoard {
        height:80vh;
        width:80vh;
        border:0.5px solid red;
        display:flex;
        flex-wrap: wrap;
    }

    .individualSquare {
        box-sizing:border-box;
        border:0.5px solid red;
        width:${100/8}%;
        height:${100/8}%;
    }

    .whiteBackground {
        background-color: #ffffff;
    }

    .blackBackground {
        background-color: #000000;
    }
`


export default GamePlay