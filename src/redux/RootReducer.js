import { combineReducers } from "redux"
import BookReducer from "./book/BookReducer"
import MobileReducer from "./mobile/MobileReducer"


const RootReducer = combineReducers({
    book: BookReducer, mobile: MobileReducer
})

export default RootReducer;