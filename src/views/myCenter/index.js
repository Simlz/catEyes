// 主页
// npm安装的包
import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"
// 内部组件
import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
// 内部静态
import Head from "../../assets/images/head.png"
import MyMovie from "../../assets/images/mycinema.png"
import MyStore from "../../assets/images/myStore.png"
import "../../assets/css/myCenter/index.css"

export default class MyCenter extends Component {
    handlerLogout(){
        localStorage.removeItem("catUserName")
        this.props.history.push("/")
    }
    render() {
        return (
            <div className="mycenter">
                <Headers to="/mycenter" label="我的"></Headers>
                <div className="main">
                    <div className="head">
                        <img src={Head} alt=""/>
                    </div>
                    <div className="myorder">
                        <div className="myorder_title">
                            <p className="myorder_line"></p>
                            <p className="title">我的订单</p>
                            <p className="myorder_line"></p>
                        </div>
                        <div className="myorder_item">
                            <Link to="/mycenter/mymovie">
                                <img src={MyMovie} alt=""/>
                                <p>电影</p>
                            </Link>
                            <Link to="/mycenter/store">
                                <img src={MyStore} alt=""/>
                                <p>商城</p>
                            </Link>
                        </div>
                    </div>
                    <div className="myCard">
                    <Link to="/mycenter/vod">
                            <p>在线观影</p>
                            <span>></span>
                        </Link>
                        <Link to="/mycenter/mycoupon">
                            <p>优惠卷</p>
                            <span>></span>
                        </Link>
                        <Link to="/mycenter/membercard">
                            <p>折扣卡</p>
                            <span>></span>
                        </Link>
                    </div>
                    <div className="button_wrap">
                        <button className="logout" type="button" onClick={() => this.handlerLogout()}>退出登录</button>
                    </div>
                    <Nav></Nav>
                </div>
            </div>
        )
    }
}
