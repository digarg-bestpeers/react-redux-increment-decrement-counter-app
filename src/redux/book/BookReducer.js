import { BUY_BOOK } from "./BookTypes"


const intialState = {
    totalBooks: 10
}


const BookReducer = (state=intialState, action) => {
    switch(action.type){
        case BUY_BOOK:
            return {
                ...state,
                totalBooks: action.payload<=state.totalBooks ? (state.totalBooks-action.payload) : state.totalBooks
            }

        default: return state
    }
}


export default BookReducer;