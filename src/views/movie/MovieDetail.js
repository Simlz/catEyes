// 电影详情页面
import React, { Component } from 'react'
import Headers from "../../components/Headers"
import '../../assets/css/movie/movieDetail.css'
import '../../assets/css/cinema/index.css'
import axios from 'axios'
import filter from '../../common/Filters'
import {Link} from "react-router-dom"
import ChooseCard from '../../components/ChooseCard'
import iconCard from "../../assets/images/icon_card.png"


export default class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
            detail:{},
            postsList:{}
        }
    }
    render() {
        let { detail,postsList } = this.state
        if(JSON.stringify(detail) === "{}"){
            return(
                null
            )
        }
        
        console.log(this.state);
        return (
            <div className="movie_detail">
                <div className="mainDetail">
                    
                    <Headers  label={detail.nm}></Headers>
                    <Link to={'/detailsdetails/'+detail.id}>
                        <div className="login">
                            <div className="pic_show">
                                <img src={filter.filter(detail.img,"128.180")} alt="" />
                            </div>
                            <div className="info_list">
                                <h2>{detail.nm}</h2>
                                <p>{detail.enm}</p>
                                <h3>{detail.sc}</h3>
                                <span>(46.7万人评)</span>
                                <p>{detail.cat}<i className="info_list-right">3D IMAX</i></p>
                                <p>{detail.src}/{detail.dur}小时</p>
                                <p>{detail.pubDesc}</p>
                            </div>
                            <div className="login_footer">></div>
                        </div>
                    </Link>
                    </div>


                    <div className="one">
                        <ChooseCard display="absolute" top="15px" tops="294px"></ChooseCard>
                        <div className="main">
                            {JSON.stringify(postsList) !== "{}" ? <ul className="cinema_list">
                                    {postsList.cinemas.map((v,k)=>{
                                        return(
                                            <li key={k}>
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
                                                        <p>{v.promotion.cardPromotionTawg ? v.promotion.cardPromotionTag : "暂无优惠"}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul> 
                            :null}
                            
                        </div>
                    </div>
                    

                </div>
        )
    }
    getDetail(){
        axios.get("/maoyan/ajax/detailmovie?movieId="+this.state.id)
        .then(({data})=>{
            this.setState({
                detail:data.detailMovie
            })
            // console.log(data)
        })
    }
     getCnameList(){
        axios.get("/maoyan/ajax/cinemaList?day=2019-08-08&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1565267915334&cityId=1")
        .then(res=>{
            this.setState({
                postsList:res.data
            })
            
            console.log(res);
        })
    }   



    componentDidMount() {
        this.getDetail();   
        this.getCnameList();
    }
    
}
