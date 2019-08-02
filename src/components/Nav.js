// 底部导航
import React, { Component } from 'react'
import {
    NavLink
} from "react-router-dom"
import router from "../router"

import "../assets/css/nav.css"

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                {
                router.map((v,k) => {
                    if(v.icon){
                        return(
                            <NavLink key={v.id} to={v.to} className="nav_item" exact={v.exact}  activeStyle={{color:"#f03d37"}}>
                                <p className={v.icon}></p>
                                <p className="nav_title">电影</p>
                            </NavLink> 
                        )
                    }
                    
                })}
            </div>
        )
    }
}
