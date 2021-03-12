import React, { useState } from 'react'
import { connect } from "react-redux"
import { BookAction } from "../redux/book/BookActions"

function BookContainer(props) {
    const [number, setNumber] = useState("")
    return (
        <div>
            <h2>Number Of Books - {props.totalBooks}</h2>
            <input type="text" value={number} onChange={ e => setNumber(e.target.value) } />
            <button onClick={() => {
                props.BookAction(number);
                setNumber("")
            }}>Buy Book</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalBooks: state.book.totalBooks
    }
}

const mapDispatchToProps = { BookAction: BookAction }
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
