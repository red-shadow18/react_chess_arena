import {legacy_createStore as createStore} from 'redux'
import {reducer} from "./reducer"
const enhancer= window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState={
    currentGameState:"gameSetup",
    player1Name:"Player1",
    player1AvatarId:"avatar-id-player1-1",
    player2Name:"Player2",
    player2AvatarId:"avatar-id-player2-6"
}

export const store = createStore(reducer,initialState,enhancer)