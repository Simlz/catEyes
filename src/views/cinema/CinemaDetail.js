import React, { Component } from 'react'
import { connect } from "react-redux"
import { getCinemaData } from "../../store/actions/Cinema/index"
import Headers from "../../components/Headers"
import address_icon from "../../assets/images/address.png"
import phone_icon from "../../assets/images/phone_icon.png"
import "../../assets/css/cinema/cinemaDetail.css"

class CinemaDetail extends Component {
    componentDidMount(){
        this.props.getCinemaData(this.props.match.params.id)
    }
    render() {
        let {data} = this.props
        if(JSON.stringify(data) === "{}"){
            return(
                null
            )
        }
        else{
            return (
                <div className="cinema_detail">
                    <Headers to={"/cinema/cinemadetail/"+data.cinemaId} label={data.nm}></Headers>
                    <div className="main">
                        <div className="cinema_detail_info">
                            <h2 className="cinema_detail_name">{data.nm}</h2>
                            <div className="cinema_detail_adress">
                                <img src={address_icon} alt="" className="address_icon2"/>
                                <p>{data.addr}</p>
                                <img src={phone_icon} alt="" className="phone_icon" />
                            </div>
                        </div>
                        <div className="cinema_detail_feature">
                            <h3 className="cinema_detail_feature_title">特色信息</h3>
                            {data.featureTags.map((v,k) => {
                                return(
                                    <div key={k} className="cinema_detail_feature_item">
                                        <div>{v.tag}</div>
                                        <p>{v.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateTpProps = state =>({
    data : state.posts.data
})
export default connect(mapStateTpProps,{getCinemaData})(CinemaDetail)
