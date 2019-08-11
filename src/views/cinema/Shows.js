// 影院详情页
import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link,NavLink } from "react-router-dom"
import { cheange_wh,afterShow } from "../../common/tool"
import Swiper from "swiper/dist/js/swiper"
import "swiper/dist/css/swiper.min.css"

import { getCinemaDetail } from "../../store/actions/Cinema"
import Headers from "../../components/Headers"
import address_icon from "../../assets/images/address.png"
import "../../assets/css/cinema/shows.css"

class Shows extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateShowKey : 0,
            imgIndex : 0

        }
    }
    handlerChangeDateShowKey(e,k){
        e.preventDefault()
        this.setState({
            dateShowKey : k,
        })
    }
    componentDidMount(){
        this.props.getCinemaDetail()
    }
    
    componentDidUpdate(){
        if(this.state.imgIndex===0){
            let mySwiper = new Swiper('.swiper-container',{
                effect : 'slide',
                slidesPerView: 4,
                centeredSlides: true,
                on:{
                    slideChangeTransitionEnd:
                        ()=>{
                                this.setState({
                                    imgIndex : mySwiper.activeIndex
                                })
                            }
                }
            })
        }
        
    }

    render() {
        let { posts } = this.props
        let { imgIndex } = this.state
        if(JSON.stringify(posts) === "{}"){
            return(
                null
            )
        }
        else{
           return (
                <div className="shows">
                    <Headers to={"/cinema/shows/"+posts.cinemaId} label={posts.cinemaData.nm}></Headers>
                    <div className="main">
                        <div className="cinema_data_wrap">
                            <Link to={"/cinema/cinemadetail/"+posts.cinemaId} className="cinema_data">
                                <div className="cinema_msg">
                                    <p className="cinema_name">
                                        {posts.cinemaData.nm}
                                    </p>
                                    <p className="cinema_address">
                                        {posts.cinemaData.addr}
                                    </p>
                                </div>
                            </Link>
                            {/* 地址 */}
                            <a 
                                href={"https://3gimg.qq.com/lightmap/v1/marker/index.html?marker=coord%3A"+
                                posts.cinemaData.lat+"%2C"+posts.cinemaData.lng+
                                "%3Btitle%3A"+posts.cinemaData.nm+
                                "%3Baddr%3A"+posts.cinemaData.addr+
                                "&%24from=canary&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU&referer=wepiao&ch=uri-api&ADTAG=uri-api.wepiao#"}
                                className="address_icon">
                                <img src={address_icon} alt=""/>
                            </a>
                        </div>
                        <div className="cinema_movie">
                            <div className="swiper-container cinema_movie_img_list">
                                <div className="swiper-wrapper cinema_movie_img_wrapper">
                                        {posts.showData.movies.map((v,k)=>{
                                            return(
                                                <div key={v.id} className="swiper-slide cinema_movie_img">
                                                    <img src={cheange_wh(v.img,65.95)} alt=""/>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                            <div className="cinema_movie_list_bg"></div>
                            <div className="cinema_movie_list_bg_img" 
                                style={{backgroundImage:'url('+
                                (cheange_wh(posts.showData.movies[imgIndex].img,"375.525")+
                                ")")}}>
                            </div>
                        </div>
                        <div className="cinema_movie_detail">
                            <div className="cinema_movie_info">
                                <div className="cinema_movie_name">
                                    <h3>{posts.showData.movies[imgIndex].nm}</h3>
                                    <p>{posts.showData.movies[imgIndex].sc}分</p>
                                </div>
                                <div className="cinema_movie_desc">
                                    {posts.showData.movies[imgIndex].desc}
                                </div>
                            </div>
                        </div>
                        <div className="show_movies">
                            {/* 放映日期 */}
                            <div className="shows_day">
                                {posts.showData.movies[imgIndex].shows.map((item,k) => {
                                    return(
                                        <NavLink 
                                            to="#"
                                            key={k}
                                            onClick={(e) => this.handlerChangeDateShowKey(e,k)}
                                            className={this.state.dateShowKey === k ? "active" : null}
                                            >{item.dateShow}
                                        </NavLink>
                                    )
                                })}
                            </div>
                            {/* 折扣 */}
                            {posts.showData.hasOwnProperty("vipInfo")?
                                <div className="shows_vipInfo">
                                    {posts.showData.vipInfo.map((v,k)=>{
                                        return(
                                            // 会员卡有链接后期改为Link
                                            <div
                                                key={k} className="shows_vipInfo_item">
                                                <div>{v.tag}</div>
                                                <p>{v.title}</p>
                                                <span>{v.process} ></span>
                                            </div>
                                        )
                                    })}
                                </div>
                            :null}
                            {/* 电影场次 */}
                            <div className="shows_plist">
                                {posts.showData.movies[imgIndex].shows[this.state.dateShowKey].plist.map((v,k)=>{
                                    return(
                                        <div key={k} className="shows_plist_item">
                                            <div className="shows_plist_item_time">
                                                <p>{v.tm}</p>
                                                <span>{afterShow(v.tm,posts.showData.movies[imgIndex].dur)} 散场</span>
                                            </div>
                                            <div className="shows_plist_item_msg">
                                                <p>{v.lang} {v.tp?v.tp:""}</p>
                                                <span>{v.th}</span>
                                            </div>
                                            <div className="shows_plist_item_price">
                                                <div className="shows_plist_item_vipPrice">
                                                    <p>￥{v.vipPrice?v.vipPrice/1+5:39}</p>
                                                    {v.vipPriceName?<span>{v.vipPriceName}</span>:null}
                                                    {v.vipPrice?<b>￥{v.vipPrice}</b>:null}
                                                </div>
                                                <span>{v.vipPriceNameNew}特惠</span>
                                            </div>
                                            <Link to="#" className="shows_plist_item_buy">购票</Link>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* 影院超值套餐 */}
                            <div className="show_movies_deallist">
                                <div className="show_movies_deallist_title">
                                    影院超值套餐
                                </div>
                                {posts.dealList.dealList.map((v,k) => {
                                    return(
                                        <Link to="#" key={k} className="show_movies_deallist_item">
                                            <div className="show_movies_deallist_item_img">
                                                <img src={cheange_wh(v.imageUrl,92.92)} alt="" style={{width:"92px",height:"92px"}}/>
                                                {v.cardTag ? <span className="show_hot">{v.cardTag}</span> : null}
                                            </div>
                                            <div className="show_movies_deallist_item_r">
                                                <div className="show_movies_deallist_item_r_title">
                                                    <span>{v.recommendPersonNum === 1 ? "单人" : "双人"}</span>
                                                    {v.title}
                                                </div>
                                                <div className="show_movies_deallist_item_price">
                                                    ￥{v.price}
                                                </div>
                                                <div className="show_movies_deallist_item_sell">
                                                    {v.curNumberDesc}
                                                </div>
                                                <div className="show_movies_deallist_item_r_button">去购买</div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            
            ) 
        } 
    }
}

// 存在问题：1.购票未实现 2.购买食品未实现 3.会员卡未实现（折扣）

const mapStateTpProps = state =>({
    posts : state.posts.item
})
export default connect(mapStateTpProps,{ getCinemaDetail })(Shows) 