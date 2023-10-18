export const CHANGETGAMESTATE ="CHANGETGAMESTATE";
export const CHANGEPLAYER1NAME="CHANGEPLAYER1NAME";
export const CHANGEPLAYER1AVATARID="CHANGEPLAYER1AVATARID";
export const CHANGEPLAYER2NAME="CHANGEPLAYER2NAME"
export const CHANGEPLAYER2AVATARID="CHANGEPLAYER2AVATARID"


export const changeGameState=(value)=>({type:CHANGETGAMESTATE, payload:value})
export const changePlayer1Name=(value)=>({type:CHANGEPLAYER1NAME, payload:value})
export const changePlayer1AvatarId=(value)=>({type:CHANGEPLAYER1AVATARID,payload:value})
export const changePlayer2Name=(value)=>({type:CHANGEPLAYER2NAME, payload:value})
export const changePlayer2AvatarId=(value)=>({type:CHANGEPLAYER2AVATARID,payload:value})