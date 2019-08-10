// 主页
import React, { Component } from 'react'
import {
    NavLink,
    Link
} from "react-router-dom"

import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/movie/comingSoon.css"
import '../../assets/css/movie/citylist.css'
import axios from 'axios'
import filter from '../../common/Filters'

export default class ComingSoon extends Component {
    constructor(){
        super()
        this.state = {
            Central:{},
            citylist:[],
            name:'北京',
            cityId:1
            
        }
        // console.log(this.state)
    }
    render() {
        if(!this.props.location.state){
            this.props.location.state = {id:1};
            // this.props.location.state.id = 1;
            // this.props.location.state.name = "北京";
        }
        let { citylist } = this.props
        if(JSON.stringify(citylist) === "{}"){
            return(
                null
            )
        } 
        // console.log(this.state.Central)
        return (
            <div className="movie">
                <Headers to="/" label="猫眼电影"></Headers>
                <div className="main">
                    <div className="second_menu">
                        <NavLink to="/citylist" className="choose_city">
                            <p>{localStorage.name?localStorage.name:this.state.name}</p>
                            <p className="triangle_gray"></p>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="active">
                            <p>正在热映</p>
                        </NavLink>
                        <NavLink exact to={{
                            pathname:"/movie/comingsoon",
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
                    <div className="warp-lis">
                        <div className="warp">
                        <div className="movie_body1">
                        <p>近期最受期待</p>
                        <ul>
                            {
                                this.state.citylist.map((v,i)=>{
                                return(
                                        <a href={`/maoyan/movie/${v.id}?_v_=yes&channelId=4&cityId=1&$from=canary#`} key={i}>
                                            <li>
                                                <div className="pic_show"><img src={filter.filter(v.img,"170.200")} alt="" /></div>
                                                <div className="info_list">
                                                    <p>{v.nm}</p>
                                                    <span>{v.comingTitle}</span>
                                                </div>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                            </ul>       
                        </div>
                        <div className="middle"></div>
                    </div>

                    <div>
                            {
                                Object.keys(this.state.Central).map((item,key)=>{
                                    return(
                                        <div key={key} className="movie_body">
                                            <div className="title">
                                                { item }
                                            </div>
                                         <ul>
                                            {
                                                this.state.Central[item].map(v=>(
                                                    <Link key={v.id} to={'/detailsdetails/'+v.id}>
                                                        <li>
                                                            <div className="pic_showimg"><img src={filter.filter(v.img,"128.180")} alt="" /></div>
                                                            <div className="info_list">
                                                                <h2>{v.nm}</h2>
                                                                <p><span className="grade">{v.wish}</span>人想看</p>
                                                                <span>主演:{v.star}</span>
                                                                <p>{v.rt}上映</p>
                                                            </div>
                                                            <div className="btn_mall">
                                                            { v.showst===4?<div style={{background:'blue'}}>预售</div>:<div style={{background:'#faaf00'}}>想看</div>}
                                                            </div>
                                                        </li>
                                                    </Link>
                                                ))
                                            }
                                  
                                        </ul> 
                                       
                                    </div>
                                    )
                                })
                            }
                    </div>     
</div>
                    
                </div>
            <Nav></Nav>
            </div>
        )
    }
    getCentral(){
        axios.get("/maoyan/ajax/comingList?ci=230&token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&limit=10")
        .then(({data})=>{
            let result =  data.coming.reduce((obj, item)=>{
                // obj[item.comingTitle] = obj[item.comingTitle] || []
                if(obj[item.comingTitle]) {
                    obj[item.comingTitle].push(item)
                }
                else {
                    obj[item.comingTitle] = [item]
                }
                return obj                
            },{})
            
            this.setState({
                Central:result
            })
            // console.log(data.coming);
        })
    }
    getComing(){
        axios.get("/maoyan/ajax/mostExpected?ci=230&limit=50&offset=0&token=")
        .then(({data})=>{
            this.setState({
                citylist:data.coming
            })
            // console.log(data)
        })   
    }
    componentDidMount() {
        this.getComing();
        this.getCentral();
        
    }
    
}
