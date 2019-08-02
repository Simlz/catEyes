// 主页
import React, { Component } from 'react'
import {
    NavLink
} from "react-router-dom"

import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/movie/comingSoon.css"

export default class ComingSoon extends Component {
    render() {
        return (
            <div className="movie">
                <Headers to="/" label="猫眼电影"></Headers>
                <div className="main">
                    <div className="second_menu">
                        <NavLink to="/citylist" className="choose_city">
                            <p>城市</p>
                            <p className="triangle_gray"></p>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="active">
                            <p>正在热映</p>
                        </NavLink>
                        <NavLink exact to="/movie/comingsoon" activeClassName="active">
                            <p>即将上演</p>   
                        </NavLink>
                        <NavLink to="/search">
                            <p className="iconfont">&#xe68d;</p>
                        </NavLink>
                    </div>
                    comingSoon
                    <Nav></Nav>
                </div>
            </div>
        )
    }
}
