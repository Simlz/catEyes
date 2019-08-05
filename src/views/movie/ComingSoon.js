// 主页
import React, { Component } from 'react'
import {
    NavLink,
    Link
} from "react-router-dom"

import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/movie/comingSoon.css"
import axios from 'axios'
import filter from '../../common/Filters'

export default class ComingSoon extends Component {
    constructor(){
        super()
        this.state = {
            citylist:[],
            pageIndex:1,
        }
        // console.log(this.state)
    }
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

                    <div className="warp">
                        <div className="movie_body1">
                        <p>近期最受期待</p>
                        <ul>
                            {
                                this.state.citylist.map((v,i)=>{
                                return(
                                        <Link to={"/"} key={i}>
                                            <li>
                                                
                                                <div className="pic_show"><img src={filter.filter(v.img,"170.200")}/></div>
                                                <div className="info_list">
                                                    <p>{v.nm}</p>
                                                    <span>{v.comingTitle}</span>
                                                    
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                })
                            }
                            </ul>       
                        </div>
                        <div className="middle"></div>
                    </div>
                            




                </div>
        <Nav></Nav>
            </div>
        )
    }

    getComing(){
        axios.get("/maoyan/ajax/mostExpected?ci=10&limit=40&offset=0")
        .then(({data})=>{
            this.setState({
                citylist:data.coming
            })
            console.log(data.coming)
        })
    }
    componentDidMount() {
        this.getComing();
    }
    
}
