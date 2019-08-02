// 商城
import React, { Component } from 'react'

import Headers from "../../components/Headers"
import Nothing from "../../components/Nothing"

export default class Store extends Component {
    render() {
        return (
            <div className="store">
                <Headers to="/mycenter/store" label="我的周边商品"></Headers>
                <div className="main">
                    <Nothing></Nothing>
                </div>
            </div>
        )
    }
}
