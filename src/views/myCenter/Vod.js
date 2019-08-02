// 在线观影
import React, { Component } from 'react'

import Nothing from "../../components/Nothing"
import Headers from "../../components/Headers"

export default class Vod extends Component {
    render() {
        return (
            <div className="vod">
                <Headers to="/mycenter/vod" label="在线观影"></Headers>
                <div className="main">
                    <Nothing></Nothing>
                </div>
            </div>
        )
    }
}
