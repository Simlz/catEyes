import React, { Component } from 'react'

import "../assets/css/headers.css"
import nothingImg from "../assets/images/nothing.jpg"
import "../assets/css/components/nothing.css"

export default class Nothing extends Component {
    render() {
        return (
            <div className="nothing">
                <img src={nothingImg} alt=""/>
                <p>您最近没有新订单，赶快去下一单吧</p>
            </div>
        )
    }
}
