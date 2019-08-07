// 优惠卷
import React, { Component } from 'react'

import Headers from "../../components/Headers"

import "../../assets/css/myCenter/myCoupon.css"

import Coupon from "../../components/Coupon"

export default class MyCoupon extends Component {
    render() {
        return (
            <div className="my_coupon">  
                <Headers to="/mycenter/mycoupon" label="我的优惠卷"></Headers>  
                <div className="main">
                    <div className="my_coupon_input">
                        <input type="text" placeholder="请输入优惠卷密码"/>
                        <p>添加</p>
                    </div>
                    <div className="coupon">
                        <Coupon 
                            money="10"
                            type="代金卷" 
                            activity="[新用户专享]"
                            explain="购票时，请在‘活动与抵用卷一栏选择该卷’"
                            starttime="2019-02-12"
                            endtime="2019-02-26"
                            isoverdur={true}
                            ></Coupon>
                            <Coupon 
                            money="20"
                            type="代金卷" 
                            activity="[美团专享]"
                            explain="购票时，请在‘活动与抵用卷一栏选择该卷’"
                            starttime="2019-07-12"
                            endtime="2019-08-26"
                            isoverdur={false}
                            ></Coupon>
                    </div>
                </div>
            </div>
        )
    }
}
