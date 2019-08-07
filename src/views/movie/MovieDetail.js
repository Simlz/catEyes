// 电影详情页面
import React, { Component } from 'react'
import Headers from "../../components/Headers"
import '../../assets/css/movie/movieDetail.css'
import axios from 'axios'
import filter from '../../common/Filters'
import {Link} from "react-router-dom"



export default class MovieDetail extends Component {
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
            <div className="movie_detail">
                <div className="mainDetail">
                    
                    <Headers  label={detail.nm}></Headers>
                    <Link to={'/detailsdetails/'+detail.id}>
                        <div className="login">
                            <div className="pic_show">
                                <img src={filter.filter(detail.img,"128.180")}/>
                            </div>
                            <div className="info_list">
                                <h2>{detail.nm}</h2>
                                <p>{detail.enm}</p>
                                <h3>{detail.sc}</h3>
                                <span>(46.7万人评)</span>
                                <p>{detail.cat}<i className="info_list-right">3D IMAX</i></p>
                                <div><p>{detail.src}/{detail.dur}小时</p></div>
                                <div><p>{detail.pubDesc}</p></div>
                            </div>
                            <div className="login_footer">></div>
                        </div>
                    </Link>
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
