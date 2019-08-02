// 折扣卡
import React, { Component } from 'react'

import Headers from "../../components/Headers"
import NoCard from "../../components/NoCard"

export default class MemberCard extends Component {
    render() {
        return (
            <div className="membercard">
                <Headers to="mycenter/membercard" label="我的折扣卡"></Headers>
                <div className="main">
                    <NoCard></NoCard>
                </div> 
            </div>
        )
    }
}
