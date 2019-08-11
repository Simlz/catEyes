// 城市列表
import React, { Component } from 'react'
import "../../assets/css/movie/citylist.css"
import {connect} from 'react-redux'
import {getAllCityList} from '../../store/actions/Movie/City'
import {Link} from 'react-router-dom'

 class CityList extends Component {
    render() {
        // console.log(this.props)
        let { city } = this.props
        if(JSON.stringify(city) === "{}"){
            return(
                null
            )
        }
        // console.log(this.props.city.cts[0].id);
        // console.log(this.props.city.cts);
        return (
            <div className="city_body">
                <div className="city-title">
                    热门城市
                </div>
                <div className="Popular">
                    {
                        this.props.city.cts.slice(0,10).map((value,i)=>{
                            return <div onClick={()=>this.getSetonClick(value.nm,value.id)} className="city-item" key={i}>{value.nm}</div>
                        })
                    }
                </div>
                <div  className="city_list">
                <div className="city_hot">
                        <ul>  
                    {
                        this.props.city.cts.slice(10).map((v,i)=>{
                            return(
                                <Link className="fixList" key={i} to={{
                                    pathname:"#",
                                    state:{
                                        id:this.props.city.cts[i].id,
                                        name:this.props.city.cts[i].name
                                    }
                                }}>
                                    
                                    <li className="city-item" onClick={()=>this.getSetonClick(v.nm,v.id)}>{v.nm}</li>
                                </Link>
                            ) 
                        })
                    }

                        </ul>
                </div>
                </div>
            </div>
)

    }
    
    getSetonClick = (name,cityId) =>{
        // console.log(name,cityId)
        localStorage.name=name;
        localStorage.cityId=cityId;
        this.props.history.go(-1);
    }
    componentDidMount() {
        this.props.getAllCityList()
    }
}

const mapStateTpProps = state =>({
city : state.wei.list
})
export default connect(mapStateTpProps,{ getAllCityList })(CityList)