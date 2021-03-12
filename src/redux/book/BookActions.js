import { BUY_BOOK } from "./BookTypes"


export const BookAction = (number) => {
    return {
        type: BUY_BOOK,
        payload: number
    }
}