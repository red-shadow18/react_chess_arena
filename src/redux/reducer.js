export const reducer=(state,action)=>{
    if (action.type==="CHANGETGAMESTATE"){
        return {...state, currentGameState:action.payload}
    }else if (action.type==="CHANGEPLAYER1NAME"){
        return {...state, player1Name:action.payload}
    }else if (action.type==="CHANGEPLAYER1AVATARID"){
        return {...state, player1AvatarId:action.payload}
    }else if (action.type==="CHANGEPLAYER2NAME"){
        return {...state, player2Name:action.payload}
    }else if (action.type==="CHANGEPLAYER2AVATARID"){
        return {...state, player2AvatarId:action.payload}
    }else if (action.type==="CHANGEBACKGROUNDIMAGELOADINGSTATUS"){
        return {...state, bgImageLoading:action.payload}
    }

    return state;
}