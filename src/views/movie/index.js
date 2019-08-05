// 主页
import React, { Component } from 'react'
import {
    NavLink,
    Link,
} from "react-router-dom"

import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/movie/index.css"
import "../../assets/css/movie/detail.css"
import {connect} from 'react-redux'
import {getAllMovieList} from '../../store/actions/Movie'

import filter from '../../common/Filters'

 class Movie extends Component {
     constructor(){
         super()
         this.state = {
            City:[],
         }
     }
    render() {
        console.log(455555,this.props.listWei)
        let { listWei } = this.props
        if(JSON.stringify(listWei) === "{}"){
            return(
                null
            )
        } 
        
        // console.log(this.props.location.state.id)
        // console.log(this.props.location.state.name)
        return (
            <div className="movie">
                <Headers to="/" label="猫眼电影"></Headers>
                <div className="main">
                    <div className="second_menu">
                            <NavLink to="/citylist" className="choose_city">
                                <p>{this.props.location.state.name}</p>
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
                    {
                        this.props.listWei.movieList.map((v,i)=>{
                            return(
                                <div key={i} className="movie_body">
                                    <ul>
                                        <Link to={"/moviedetail/"+v.id} key={i}>
                                            <li>
                                                <div className="pic_show"><img src={filter.filter(v.img,"128.180")}/></div>
                                                <div className="info_list">
                                                    <h2>{v.nm}</h2>
                                                    <p>观众评 <span className="grade">{v.sc}</span></p>
                                                    <p>主演:{v.star}</p>
                                                    <p>{v.showInfo}</p>
                                                </div>
                                                <div className="btn_mall">
                                                
                                                { v.preShow?<div style={{background:'blue'}}>预售</div>:"购票"}
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                   
                                </div>
                            )
                        })
                    }
                    <Nav></Nav>
                </div>
            </div>
        )
    }
  
    componentDidMount() {
        this.props.getAllMovieList();
        
    }
    
}
const mapStateTpProps = state =>({
    listWei : state.listWei.goods
})
export default connect(mapStateTpProps,{ getAllMovieList })(Movie)