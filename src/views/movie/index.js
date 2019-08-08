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
            name:'北京'
         }
     }
     
    render() {
        // console.log(455555,this.props.listWei)
        if(!this.props.location.state){
            this.props.location.state = {id:1};
        }

        let { listWei } = this.props
        if(JSON.stringify(listWei) === "{}"){
            return(
                null
            )
        } 
        
        // console.log(this.props)
        // console.log(this.props.location.state.name)
        return (
            <div className="movie">
                <Headers to="/" label="猫眼电影"></Headers>
                <div className="main">
                    <div className="second_menu">
                            <NavLink to="/citylist" className="choose_city">
                                <p>{localStorage.name}</p>
                                <p className="triangle_gray"></p>
                            </NavLink>
                            <NavLink exact to="/" activeClassName="active">
                                <p>正在热映</p>
                            
                            </NavLink>
                            <NavLink exact to={{
                                pathname:"/movie/comingsoon/",
                                state:{
                                    name:this.props.location.state.name
                                }
                            }} activeClassName="active">
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
                                                <div className="pic_show"><img src={filter.filter(v.img,"128.180")} alt="" /></div>
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
    // componentWillMount(){
    //     if(this.props.location.state){
    //         localStorage.id=this.props.location.state.id,
    //         localStorage.name=this.props.location.state.name
    //     }else if(!this.props.location.state){
    //         localStorage.id = 1;
    //         localStorage.name = "北京"
    //     }
    // }
    // componentWillReceiveProps(){
    //     console.log(2222222)
    //     if(!this.props.location.state){
    //         this.props.location.state = {};
    //         this.props.location.state.id = 1;
            
    //     }
    //     this.props.getAllMovieList(this.props.location.state.id);
    // }

    componentDidMount() {
        // console.log(222222222222,localStorage.name);
        // // console.log(this.props.location.state.name)
        // if(!this.props.location.state){
        //     this.props.location.state = {id:1};
        //     // localStorage.name = "北京"
        //     // this.props.location.state.id = 1;
        //     // this.props.location.state.name = ;
        // }
        this.props.getAllMovieList(this.props.location.state.id);
        
    }
    
}
const mapStateTpProps = state =>({
    listWei : state.listWei.goods
})
export default connect(mapStateTpProps,{ getAllMovieList })(Movie)