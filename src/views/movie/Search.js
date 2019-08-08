// 搜索
import React, { Component } from 'react'

import Headers from "../../components/Headers"
import '../../assets/css/movie/search.css'
import axios from 'axios'
import filter from '../../common/Filters'
import {Link} from 'react-router-dom'
 
export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            searchList:[],
            SearchName:""
        }
    }
    
    render() {
        let searchList = this.state.searchList
        if( searchList=== "[]"){
                searchList = null
        }
        // console.log(this.state.searchList.list);
        return (
            <div className="search">
                <Headers to="/search" label="猫眼电影"></Headers>
               <div className="main-search">
                   <div className="search-login">
                       <p><i className="iconfont">&#xe68d;</i></p>

                      <input type="text" onChange={this.handleClick.bind(this)}  ref="SearchName" placeholder="搜电影、搜影院"  />
                        
                        <button onClick={()=>{
                            this.props.history.push("/")
                        }}>取消</button> 
                   </div>
                   <div className="Line"></div>

                   <div className="Outercity">
                        <p>电影/电视剧/综艺</p>
                    <div className="Line-bottom"></div>   
                    
                        <div className="Central">
                                {
                                    this.state.searchList.map((v,i)=>{
                                        return(
                                            <div key={i} className="movie_body">
                                                <ul>
                                                    <Link to={"/detailsdetails/"+v.id} key={i}>
                                                        <li>
                                                            <div className="pic_show"><img src={filter.filter(v.img,"128.180")} alt="" /></div>
                                                            <div className="info_list">
                                                                <h2>{v.nm}</h2>
                                                                <p><span className="grade">{v.enm}</span></p>
                                                                <p>{v.cat}</p>
                                                                <p>{v.rt}</p>
                                                            </div>
                                                            
                                                        </li>
                                                    </Link>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    
                   </div>
                </div> 
            </div>
        )
    }
 
handleClick =() =>{
    let  words = this.refs.SearchName.value;
    axios.get("/maoyan/ajax/search?kw="+words+"&cityId=230&stype=-1")
    .then(({data})=>{
        if(data.movies && data.movies.list){
            setTimeout(()=>{
                this.setState({
                    searchList:data.movies.list
                })
            },2000);
           
        }else{
            this.setState({
                searchList: []
            })
        }
    })
}
   
    
}
