// 搜索
import React, { Component } from 'react'

import Headers from "../../components/Headers"
 
export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <Headers to="/search" label="猫眼电影"></Headers>
               <div className="main">
                    Search
                </div> 
            </div>
        )
    }
}
