import { SELL_MOBILE, BUY_MOBILE } from "./MobileTypes"


const intialState = {
    totalMobiles: 12
}


const MobileReducer = (state=intialState, action) => {
    switch(action.type){
        case SELL_MOBILE:
            return {
                ...state,
                totalMobiles: action.payload<=state.totalMobiles ? (state.totalMobiles - action.payload) : state.totalMobiles
            }

        case BUY_MOBILE:
            return {
                ...state,
                totalMobiles: action.payload ? (state.totalMobiles + parseInt(action.payload)) : state.totalMobiles
            }

        default: return state 
    }
}


export default MobileReducer;