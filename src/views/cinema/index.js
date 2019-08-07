// 主页
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import ChooseCard from "../../components/ChooseCard"
import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/cinema/index.css"
import iconCard from "../../assets/images/icon_card.png"

import { getAllCinemaList } from "../../store/actions/Cinema/index"

class Cinema extends Component {

    componentDidMount(){
        this.props.getAllCinemaList();
        
    }

    render() {
        let { posts } = this.props
        if(JSON.stringify(posts) === "{}"){
            return(
                null
            )
        }
        else{
            return (
                <div className="cineam_wrap">
                    <div className="cinema">
                        <Headers to="/cinema" label="影院"></Headers>
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
                        <div className="main">
                            <ul className="cinema_list">
                                {posts.cinemas.map((v,k)=>{
                                    return(
                                        <li key={v.id}>
                                            <Link to={"/cinema/shows/"+v.id}>
                                                <div className="cinema_name">
                                                    <span>{v.nm}</span>
                                                    <span className="q"><span className="price">  {v.sellPrice}</span>  元起</span>
                                                </div>
                                                <div className="address">
                                                    <span className="adderss_fir">{v.addr}</span>
                                                    <span>{v.distance}</span>
                                                </div>
                                                <div className="card">
                                                    {v.tag.allowRefund ? <p style={{color:"#589daf",borderColor:"#589daf"}}>退</p> :null}
                                                    {v.tag.endorse ? <p style={{color:"#589daf",borderColor:"#589daf"}}>改签</p> :null}
                                                    {v.tag.snack ? <p style={{color:"#f90",borderColor:"#f90"}}>小吃</p> :null}
                                                    {v.tag.vipTag ? <p style={{color:"#f90",borderColor:"#f90"}}>折扣卡</p> :null} 
                                                    {v.tag.hallTypeVOList.length>0? v.tag.hallTypeVOList.map(
                                                        (item,key)=>{
                                                            return(
                                                                <p style={{color:"#589daf",borderColor:"#589daf"}} key={key}>{item.name}</p>
                                                            )
                                                        }
                                                    )  : null}
                                                </div>
                                                <div className="discount">
                                                    <img src={iconCard} alt=""/>
                                                    <p>{v.promotion.cardPromotionTag ? v.promotion.cardPromotionTag : "暂无优惠"}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul> 
                            <Nav></Nav>
                        </div>
                    </div>
                    <ChooseCard></ChooseCard>
                </div>
                
                
                        <ul className="cinema_list">
                            {posts.cinemas.map((v,k)=>{
                                return(
                                    <li key={v.id}>1</li>
                                )
                            })}
                        </ul>
                        <Nav></Nav>
                    </div>
                </div>
                
            ) 
        }
            
        
        
    }
}


const mapStateTpProps = state =>({
    posts : state.posts.items
})
export default connect(mapStateTpProps,{ getAllCinemaList })(Cinema)