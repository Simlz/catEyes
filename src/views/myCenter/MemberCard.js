// 折扣卡
import React, { Component } from 'react'
import axios from "axios"

import Headers from "../../components/Headers"
import NoCard from "../../components/NoCard"

export default class MemberCard extends Component {
    handlerClick(){
        axios.get("http://127.0.0.1:80/sum").then(res=>console.log(res))
    }
    render() {
        return (
            <div className="membercard">
                <Headers to="mycenter/membercard" label="我的折扣卡"></Headers>
                <div className="main">
                    <NoCard></NoCard>
                    <button type="button" onClick={()=>this.handlerClick()}>登陆</button>
                </div> 
            </div>
        )
    }
}
