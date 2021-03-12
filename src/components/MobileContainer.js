import React, { useState } from 'react'
import { connect } from "react-redux"
import { MobileSellAction, MobileBuyAction } from "../redux/mobile/MobileActions"



function MobileContainer(props) {
    const [number, setNumber] = useState("")
    return (
        <div>
            <h2>Available Total Mobile : {props.totalMobiles}</h2>
            <h3>Available Books: {props.totalBooks}</h3>
            <input type="text" value={number} onChange={ e => setNumber(e.target.value)} />
            <button onClick={ ()=> {
                props.MobileSellAction(number);
                setNumber("")
            } }>Sell Mobile</button>
            <button onClick={ ()=> {
                props.MobileBuyAction(number);
                setNumber("")
            } }>Buy Mobile</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalMobiles: state.mobile.totalMobiles,
        totalBooks: state.book.totalBooks
    }
}

const mapDispatchToProps = {
    MobileSellAction: MobileSellAction,
    MobileBuyAction: MobileBuyAction
    }


export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer)
