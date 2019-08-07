// 电影详情页面
import React, { Component } from 'react'
import Headers from "../../components/Headers"
import '../../assets/css/movie/DetailsDetails.css'
import axios from 'axios'
import filter from '../../common/Filters'
import {Link} from "react-router-dom"



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
        if(JSON.stringify(detail) === "{}"){
            return(
                null
            )
        }
        // console.log(this.props.match.params.id);
        return (
            <div className="movie_detail-e">
                <div className="mainDetail-e">
                    
                    <Headers  label={detail.nm}></Headers>
                        <div className="login-e">
                            <div className="pic_show-e">
                            <Link to={'/movie/preview/'+detail.id}>
                                <img src={filter.filter(detail.img,"128.180")}/>
                            </Link>
                            </div>
                            <div className="info_list-e">
                                <h2>{detail.nm}</h2>
                                <p>{detail.enm}</p>
                                <h3>{detail.sc}</h3>
                                <span>(165万人评分)</span>
                                <p>{detail.cat}<i className="info_list-right-e">3D IMAX</i></p>
                                <div><p>{detail.src}/{detail.dur}小时</p></div>
                                <div><p>{detail.pubDesc}</p></div>
                            </div>
                            <div className="login_footer-e">></div>
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
            console.log(data)
        })
    }
    componentDidMount() {
        this.getDetail();   
    }
    
}
