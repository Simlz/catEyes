// 电影详情页面
import React, { Component } from 'react'
import Headers from "../../components/Headers"
import '../../assets/css/movie/DetailsDetails.css'
import axios from 'axios'
import filter from '../../common/Filters'



export default class DetailsDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
            detail:{},
        }
    }
    render() {
        let { detail } = this.state
        const ids = this.props.match.params.id;

        if(JSON.stringify(detail) === "{}"){
            return(
                null
            )
        }
        
        
        // console.log(this.state.detail.id)
        // console.log(this.props.match.params.id);
        return (
            <div className="movie_detail-e">
                <div className="mainDetail-e">
                    
                    <Headers  label={detail.nm}></Headers>
                        <div className="login-e">
                            <div className="pic_show-e">
                                
                                <a href={'/maoyan/movie/'+ids+'/preview?_v_=yes'}>
                                    <div className="garden">
                                        <p></p>
                                    </div>
                                    <img alt="" src={filter.filter(detail.img,"128.180")}/>
                                </a>
                            </div>
                            <div className="info_list-e">
                                <h2>{detail.nm}</h2>
                                <p>{detail.enm}</p>
                                <div className="info_list-Star"><i>*****</i><h3>{detail.sc}</h3></div>
                                <p>(165万人评分)</p>
                                <p>{detail.cat}<i className="info_list-right-e">3D IMAX</i></p>
                                <div><p>{detail.src}/{detail.dur}小时</p></div>
                                <div><p>{detail.pubDesc}</p></div>
                            </div>
                            <div className="login_footer-e">></div>
                        </div>
                    </div>
                    
                    <div className="Ticket">
                        <span onClick={()=>{
                            this.props.history.push("/moviedetail/"+detail.id)
                        }}>特惠购票</span>
                        <div className="Ticket-show">
                           <p>{detail.dra}</p>
                           {/* <h3 onClick={this.display.bind(this)}> > </h3> */}
                        </div>
                    </div>
                    {/* 人物 */}
                    {/* <div className="character">
                        
                    </div> */}
                    {/* 媒体库 */}
                    <div className="media-wrap">
                        <div className="media">
                            <h4>媒体库</h4>
                            <div className="media-rido">
                                {
                                    detail.photos.map((v,i)=>{
                                        return(
                                            <a key={i} href={'/maoyan/movie/'+ids+'/stages'}><img  src={filter.filter(v,"128.180")} alt="" /></a>
                                        )
                                    })
                                }
                            
                            </div>
                            
                        </div>
                        <div className="media-rido-left">
                            <a href={'/maoyan/movie/'+ids+'/preview?'}><h3>视频 <span>19 > </span> </h3></a>
                            <a href={'/maoyan/movie/'+ids+'/photos?'}><h4>剧照 <span>288 > </span> </h4></a>
                        </div>
                    </div>

                </div>
        )
    }
    display(){
        var str = document.querySelector(".Ticket-show p")
            str.style.overflow = "visible"
            console.log(str)
    }
    getDetail(){
        axios.get("/maoyan/ajax/detailmovie?movieId="+this.state.id)
        .then(({data})=>{
            this.setState({
                detail:data.detailMovie
            })
            console.log(data)
        })
    }
    componentDidMount() {
        this.getDetail();   
        console.log(this.props.match.params.id)
    }
    
}
