import { SELL_MOBILE, BUY_MOBILE } from "./MobileTypes"


export const MobileSellAction = (number) => {
    return {
        type: SELL_MOBILE,
        payload: number
    }
}


export const MobileBuyAction = (number) => {
    return {
        type: BUY_MOBILE,
        payload: number
    }
}