// 搜索
import React, { Component } from 'react'

import Headers from "../../components/Headers"
import '../../assets/css/movie/search.css'
import axios from 'axios'
 
export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            SearchName:""
        }
    }
    render() {
        console.log(this.props);
        return (
            <div className="search">
                <Headers to="/search" label="猫眼电影"></Headers>
               <div className="main-search">
                   <div className="search-login">
                       <p><i className="iconfont">&#xe68d;</i></p>
                      <input type="text" ref="SearchName" placeholder="搜电影、搜影院"  />
                        <button onClick={()=>{
                            this.props.history.go(-1)
                        }}>取消</button> 
                   </div>
                   <div className="Line"></div>
                </div> 
                <div>

                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("/maoyan/ajax/search?kw=%E4%B8%8A%E6%B5%B7&cityId=230&stype=-1")
        .then(({data})=>{
            console.log(data)
        })
    }
    
}
