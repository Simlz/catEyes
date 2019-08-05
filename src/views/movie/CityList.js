// 城市列表
import React, { Component } from 'react'
import "../../assets/css/movie/citylist.css"
import {connect} from 'react-redux'
import {getAllCityList} from '../../store/actions/Movie/City'
import {NavLink} from 'react-router-dom'

 class CityList extends Component {

    render() {
        
        let { city } = this.props
        if(JSON.stringify(city) === "{}"){
            return(
                null
            )
        }
        // console.log(this.props.city.cts[0].id);
        // console.log(this.props.city.cts[0].nm);
        return (
            <div className="city_body">
                <h2>热门城市</h2>
                {
                    this.props.city.cts.map((v,i)=>{
                        return(
                            <NavLink to={{
                                pathname:"/",
                                state:{
                                    id:this.props.city.cts[i].id,
                                    name:this.props.city.cts[i].nm,
                                }
                            }} key={i}>
                                <div  className="city_list">
                                    <div className="city_hot">
                                        <ul className="clearfix">
                                            <li>{v.nm}</li>
                                        </ul>
                                    </div>
                                        {/* <div className="city_sort">
                                            <div>
                                                <h2></h2>
                                                <ul>
                                                    <li>{}</li>
                                                </ul>
                                            </div>
                                        </div> */}
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getAllCityList()
    }
}

const mapStateTpProps = state =>({
city : state.wei.list
})
export default connect(mapStateTpProps,{ getAllCityList })(CityList)