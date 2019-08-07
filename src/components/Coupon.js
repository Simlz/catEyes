import React, { Component } from 'react'

import "../assets/css/components/coupon.css"
import overdue from "../assets/images/overdue.png"

export default class Coupon extends Component {
    render() {
        let {money,type,activity,explain,starttime,endtime,isoverdur} = this.props;
        return (
            <div className="coupon_com">
                <div className="coupon_left" style={{backgroundColor:isoverdur?"#c9c9c9" : "#f03d37"}}>
                    <div className="money">
                        <h3>{money}</h3>
                        <p>元</p>
                    </div>
                    <div className="coupon_type">
                        {type}
                    </div>
                </div>
                <div className="coupon_right">
                    <p className="coupon_activity">
                        {activity}{money}元电影卷
                    </p>
                    <p className="coupon_explain">
                        {explain}
                    </p>
                    <p className="coupon_time">
                        有效期{starttime}至{endtime}
                    </p>
                    <img style={{display:isoverdur ? "block" : "none"}} src={overdue} alt=""/>
                </div>
            </div>
        )
    }
}
