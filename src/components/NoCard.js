import React, { Component } from 'react'

import Card from "../assets/images/card.png"
import "../assets/css/components/noCard.css"

export default class NoCard extends Component {
    render() {
        return (
            <div className="no_card">
                <img src={Card} alt=""/>
                <p>暂无影院会员卡</p>
            </div>
        )
    }
}
