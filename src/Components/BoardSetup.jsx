import React from "react";
import Heading from "./Heading";
import styled from "@emotion/styled";
import Avatar1 from "../asset/images/AvatarIcons/1.svg"
import Avatar2 from "../asset/images/AvatarIcons/2.svg"
import Avatar3 from "../asset/images/AvatarIcons/3.svg"
import Avatar4 from "../asset/images/AvatarIcons/4.svg"
import Avatar5 from "../asset/images/AvatarIcons/5.svg"
import Avatar6 from "../asset/images/AvatarIcons/6.svg"
import Avatar7 from "../asset/images/AvatarIcons/7.svg"
import Avatar8 from "../asset/images/AvatarIcons/8.svg"
import Avatar9 from "../asset/images/AvatarIcons/9.svg"
import Avatar10 from "../asset/images/AvatarIcons/10.svg"
import Avatar11 from "../asset/images/AvatarIcons/11.svg"
import Avatar12 from "../asset/images/AvatarIcons/12.svg"
import Avatar13 from "../asset/images/AvatarIcons/13.svg"
import Avatar14 from "../asset/images/AvatarIcons/14.svg"
import Avatar15 from "../asset/images/AvatarIcons/15.svg"
import Avatar16 from "../asset/images/AvatarIcons/16.svg"
import Avatar17 from "../asset/images/AvatarIcons/17.svg"
import Avatar18 from "../asset/images/AvatarIcons/18.svg"

import IndividualAvatar from "./Avatar";
import TextField from "./InputField";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { changeGameState, changePlayer1AvatarId, changePlayer1Name, changePlayer2AvatarId, changePlayer2Name } from "../redux/action";

const allAvatars=[Avatar1,Avatar2, Avatar3,Avatar4,Avatar5,Avatar6,Avatar7,Avatar8,Avatar9,Avatar10,Avatar11,Avatar12,Avatar13,Avatar14,Avatar15,Avatar16,Avatar17,Avatar18]


const BoardSetup=()=>{

    const dispatch=useDispatch()


    const player1Name=useSelector(state=>state.player1Name)
    const player1AvatarId=useSelector(state=>state.player1AvatarId)
    const player2Name=useSelector(state=>state.player2Name)
    const player2AvatarId=useSelector(state=>state.player2AvatarId)

    const handleStartGame =()=>{
       dispatch(changeGameState("gamePlay"))
    }

    const checkStartButtonState = ()=>{
        let disabled=true
        if(player1Name && player1AvatarId && player2Name && player2AvatarId){
            return false
        }
        return disabled
    }

    const handleAvatarSelection=(e)=>{
        const {id}= e.target
        const {sectionid}=e.target.closest("div").dataset
        if(sectionid==="player1"){
            dispatch(changePlayer1AvatarId(id))
        }else if(sectionid==="player2"){
            dispatch(changePlayer2AvatarId(id))
        }
    }

    const handlePlayerNameChange=(value,id)=>{
        if(id==="player1"){
            dispatch(changePlayer1Name(value))
        }else if(id==="player2"){
            dispatch(changePlayer2Name(value))
        }
    }

    return (
        <BoardSetupContainer>
        <Heading type="h1" textAlign="center" color="#909090">Configure players:</Heading>
        <div className="playersInfo">
            <section className="section1" >
            <Heading type="h3" color="white" textAlign="center">Player 1</Heading> 
            <Heading type="h4" color="white">Chose an Avatar:</Heading>
            <div className="avatarContainer" data-sectionid="player1" onClick={handleAvatarSelection}>
                {
                    allAvatars.map((avatar,index)=><IndividualAvatar borderColor="white" className={player1AvatarId===`avatar-id-player1-${index}`? "chosenAvatarP1" :""} id={`avatar-id-player1-${index}`} src={avatar} key={index}/>)
                }
            </div>
            <TextField borderColor="white" width="50%" className="mt-2rem nameText" onChange={handlePlayerNameChange} value={player1Name} label="Name" playerNumber="player1"/>
            </section>
            <section className="verticalLine"></section>
            <section className="section2" >
            <Heading type="h3" textAlign="center">Player 2</Heading> 
            <Heading type="h4">Chose an Avatar:</Heading>
            <div className="avatarContainer" data-sectionid="player2" onClick={handleAvatarSelection}>
                {
                    allAvatars.map((avatar,index)=><IndividualAvatar borderColor="black" className={player2AvatarId===`avatar-id-player2-${index}`? "chosenAvatarP2" :""} id={`avatar-id-player2-${index}`} src={avatar} key={index}/>)
                }
            </div>
            <TextField borderColor="black" width="50%" className="mt-2rem nameText" onChange={handlePlayerNameChange} value={player2Name} label="Name" playerNumber="player2"/>
            </section>   
        </div>

        <Button className="mt-2rem" type="secondary" size="18px" onClick={handleStartGame} disabled={checkStartButtonState()}>Start game</Button>

    </BoardSetupContainer>
    )
}

const BoardSetupContainer=styled.div`
    width:80%;



    .mt-1rem {
        margin-top:1rem;
    }
    .mt-2rem {
        margin-top:2rem;
    }
    .playersInfo{
        width:100%;
        display:flex;
        gap:10px;
        position: relative;

    &:before{
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: -1px -1px 2px 2px #8b8b8b;
    content: "";
    width: 100%;
    height: 100%;
    background: #545454;
    position: absolute;
    z-index: -2;
    opacity: .75;
    top: 0;
    left: 0;
    padding: 10px;
}
    }
    .section1{
        width:50%;
        padding: 10px;
        color:white !important;
    }
    .section2{
        width:50%;
        padding: 10px;
        color:black !important;
    }
    .verticalLine{
        opacity: 0.25;
        width: 3px;
        background-color: black;
        margin: 12px 0;
        outline: none;
        border: none;
    }
    .avatarContainer{
        display:flex;
        flex-wrap: wrap;
        gap:10px;
        justify-content: center;
    }

    img{
        cursor: pointer;
        transition: all 300ms;
        &:hover{
            transform:scale(1.2);
            box-shadow: 2px 2px;
        }
    }
    .chosenAvatarP1 {
        margin:1.5px;
        transform:scale(1.2);
        border: 3px solid white;
        animation:glow 1s infinite alternate;
    }
    @keyframes glow {
        from {
            box-shadow: 1px 1px 2px 2px red;
        }to {
            box-shadow: 1px 1px 2px -2px red;
        }
    }

    .chosenAvatarP2 {
        margin:1.5px;
        transform:scale(1.2);
        border: 3px solid black;
        animation:glow2 1s infinite alternate;
    }

    @keyframes glow2 {
        from {
            box-shadow: 1px 1px 2px 2px blue;
        }to {
            box-shadow: 1px 1px 2px -2px blue;
        }
    }

    .nameText{
        input {
            color:inherit;
        }
    }
`

export default BoardSetup;