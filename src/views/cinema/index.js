// 主页
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import ChooseCard from "../../components/ChooseCard"
import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/cinema/index.css"
import iconCard from "../../assets/images/icon_card.png"
import NoCinema from "../../components/NoCinema"

import { getAllCinemaList,getMoreCinema } from "../../store/actions/Cinema/index"

class Cinema extends Component {
    constructor(props){
        super(props)
        this.state={
            pageIndex : 1,
            cinema : []
        }
    }
    componentDidMount(){
        localStorage.areaId=-1
        localStorage.districtId=-1
        localStorage.lineId=-1
        localStorage.hallType=-1
        localStorage.brandId=-1
        localStorage.serviceId=-1
        localStorage.areaId=-1
        localStorage.stationId=-1
        this.props.getAllCinemaList();
    }
    handlerScroll(){
        this.props.getMoreCinema({offset:20*this.state.pageIndex,
            districtId:localStorage.districtId,
            lineId:localStorage.lineId,
            hallType:localStorage.hallType,
            brandId:localStorage.brandId,
            serviceId:localStorage.serviceId,
            areaId:localStorage.areaId,
            stationId:localStorage.stationId
        })
        this.setState({
            pageIndex : this.state.pageIndex/1+1
        })
    }
    componentWillReceiveProps(){
            window.addEventListener('scroll', () =>
                (document.body.scrollTop || document.documentElement.scrollTop)>1800+2200*(this.state.pageIndex-1)?
                    this.handlerScroll()
                :null
            )
        
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.seats===this.props.seats&&nextProps.seats.cinemas){
            return false
        }else{
            return true
        }
    }
    render() {
        let { posts,seats } = this.props
        if(JSON.stringify(posts) === "{}"){
            return(
                null
            )
        }
        else{
            JSON.stringify(seats)!=="{}"?posts.cinemas = [...posts.cinemas,...seats.cinemas.slice(seats.cinemas.length-20)]:posts.cinemas=[...posts.cinemas]
            return (
                <div className="cineam_wrap">
                    <div className="cinema">
                        <Headers to="/cinema" label="影院"></Headers>
                    <div className="main">
                        <div className="cinema_tabbar">
                            <Link to="citylist" className="choose_city">
                                <p>{localStorage.name?localStorage.name:'北京'}</p>
                                <p className="triangle_gray"></p>
                            </Link>
                            <Link to="search" className="search_cinema">
                                <p className="iconfont">&#xe68d; 搜索</p>
                            </Link>
                        </div>
                        <div className="main">
                            {posts.cinemas.length>0 ? 
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
                            : <NoCinema></NoCinema>}
                            
                        </div>
                    </div>
                    <ChooseCard></ChooseCard>
                    <Nav></Nav>
                    </div>
                </div>
                
            ) 
        }
            
        
        
    }
}


const mapStateTpProps = state =>({
    posts : state.posts.items,
    seats : state.posts.seats
})
export default connect(mapStateTpProps,{ getAllCinemaList,getMoreCinema })(Cinema)