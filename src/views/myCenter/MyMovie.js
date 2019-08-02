// 电影
import React, { Component } from 'react'

import Nothing from "../../components/Nothing"

import Headers from "../../components/Headers"

export default class MyMovie extends Component {
    render() {
        return (
            <div className="my_movie">
                <Headers to="/mycenter/mymovie" label="我的电影订单"></Headers>
                <div className="main">
                    <Nothing></Nothing>
                </div>
            </div>
        )
    }
}
