// 主页
import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"
import { connect } from "react-redux"

import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/cinema/index.css"

import { getAllCinemaList } from "../../store/actions/Cinema/index"

class Cinema extends Component {

    componentDidMount(){
        this.props.getAllCinemaList();
    }

    render() {
        let { posts } = this.props
        console.log(posts)
        return (
            <div className="cinema">
                <Headers to="/cinema" label="影院"></Headers>
                <div className="main">
                    <div className="cinema_tabbar">
                        <Link to="citylist" className="choose_city">
                            <p>城市</p>
                            <p className="triangle_gray"></p>
                        </Link>
                        <Link to="search" className="search_cinema">
                            <p className="iconfont">&#xe68d; 搜索</p>
                        </Link>
                    </div>
                    Cinema
                    <Nav></Nav>
                </div>
            </div>
            
        )
    }
}

const mapStateTpProps = state =>({
    posts : state.posts.cinemaList
})
export default connect(mapStateTpProps,{ getAllCinemaList })(Cinema)