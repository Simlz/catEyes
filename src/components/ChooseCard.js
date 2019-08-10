import React, { Component } from 'react'
import { connect } from "react-redux"

import { getChooseCard,getAllCinemaList,getMoreCinema } from "../store/actions/Cinema/index"

import "../assets/css/components/chooseCard.css"

class ChooseCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            chooseNum : 0,
            adressNum : 1,
            addressName:"全城",
            districtId:-1,        // 地区-区
            // districtId : -1, 
            adressTitle:"",
            stationId : -1,    // 地铁-站
            lineId:-1,         // 地铁-线
            itemId:-1,         // 地区-区下级
            brandId:-1,        // 品牌
            brandName:"品牌",
            serverId:-1,
            hallTypeId:-1,
        }
    }
    handlerChangeChooseNum(num){
        if(num===this.state.chooseNum){
            this.setState({
                chooseNum : 0
            })
        }else{
            this.setState({
                chooseNum : num
            }) 
        }
    }
    handlerChangeAdressNum(num){
        this.setState({
            adressNum : num
        })
    }
    handlerChangedistrictId(num,name){
        this.props.getAllCinemaList({lineId:this.state.lineId,districtId:num,areaId:this.state.itemId,stationId:this.state.stationId,brandId:this.state.brandId,serviceId:this.state.serverId,hallType:this.state.hallTypeId})
        this.setState({
            districtId : num,
            adressTitle :name
        })
        localStorage.districtId=num
    }
    handlerChangelineId(num,name){
        this.props.getAllCinemaList({lineId:num,districtId:this.state.districtId,areaId:this.state.itemId,stationId:this.state.stationId,brandId:this.state.brandId,serviceId:this.state.serverId,hallType:this.state.hallTypeId})
        this.setState({
            lineId : num,
            adressTitle : name
        })
        localStorage.lineId=num
    }
    handlerChangeItemId(num,name){
        this.props.getAllCinemaList({lineId:this.state.lineId,districtId:this.state.districtId,areaId:num,stationId:this.state.stationId,brandId:this.state.brandId,serviceId:this.state.serverId,hallType:this.state.hallTypeId})
        this.setState({
            chooseNum : 0,
            addressName : name,
            itemId : num,
        })
        localStorage.areaId=num
    }
    handlerChangeStationId(num,name){
        this.props.getAllCinemaList({lineId:this.state.lineId,districtId:this.state.districtId,stationId:num,areaId:this.state.itemId,brandId:this.state.brandId,serviceId:this.state.serverId,hallType:this.state.hallTypeId})
        this.setState({
            chooseNum : 0,
            addressName : name,
            itemId : num,
        })
        localStorage.stationId=num
    }
    handlerChangeBrandId(num,name){
        this.props.getAllCinemaList({lineId:this.state.lineId,districtId:this.state.districtId,stationId:this.state.stationId,brandId:num,areaId:this.state.itemId,serviceId:this.state.serverId,hallType:this.state.hallTypeId})
        this.setState({
            brandId : num,
            chooseNum : 0,
            brandName:name,
        })
        localStorage.brandId=num
    }
    handlerChangeServerId(num){
        this.setState({
            serverId : num
        })
        localStorage.serviceId=this.state.serverId
    }
    handlerChangeHallTypeId(num){
        this.setState({
            hallTypeId : num
        })
        localStorage.hallType=this.state.hallTypeId
    }
    handlerCencle(){
        this.setState({
            serverId : -1,
            hallTypeId : -1
        })
        localStorage.serviceId=-1
        localStorage.hallType=-1
    }
    handlerConfirm(){
        this.props.getAllCinemaList({lineId:this.state.lineId,districtId:this.state.districtId,stationId:this.state.stationId,areaId:this.state.itemId,brandId:this.state.brandId,serviceId:this.state.serverId,hallType:this.state.hallTypeId})
        this.setState({
            chooseNum : 0
        })
    }

    componentDidMount(){
        this.props.getChooseCard(localStorage.cityId)
    }
    render() {
        let {cardList} = this.props
        if(JSON.stringify(cardList) === "{}"){
            return(
                null
            )
        }
        else{
            return (
                <div className="choose_card_wrap">
                    <div className="choose_card" style={{position:this.props.display,top:this.props.top}}>
                        <div className="choose_card_item" onClick={()=>this.handlerChangeChooseNum(1)}> 
                            <div 
                                style={{color:this.state.chooseNum === 1 ? "#e54847" : ""}}
                                >{this.state.addressName}
                            </div>
                            {this.state.chooseNum === 1 ? <p className="triangle_red"></p> : <p className="triangle_gray"></p>}
                        </div>
                        <div className="choose_card_item" onClick={()=>this.handlerChangeChooseNum(2)}>
                            <div 
                                style={{color:this.state.chooseNum === 2 ? "#e54847" : ""}}
                                >{this.state.brandName==="全部"?"品牌":this.state.brandName}
                            </div>
                            {this.state.chooseNum === 2 ? <p className="triangle_red"></p> : <p className="triangle_gray"></p>}
                        </div>
                        <div className="choose_card_item" onClick={()=>this.handlerChangeChooseNum(3)}>
                            <div 
                                style={{color:this.state.chooseNum === 3 ? "#e54847" : ""}}
                                >特色
                            </div>
                            {this.state.chooseNum === 3 ? <p className="triangle_red"></p> : <p className="triangle_gray"></p>}
                        </div>
                    </div>
                    {/* 地区 */}
                    {this.state.chooseNum === 1 ? <div className="choose_card_list">
                        <div className="list_wrap" style={{position:this.props.display,top:this.props.tops}}>
                            <div className="choose_address">
                                <ul>
                                    <li 
                                        className={this.state.adressNum===1 ? "choose_address_is" : ""}
                                        onClick={()=>this.handlerChangeAdressNum(1)}
                                    >商区</li>
                                    <li 
                                        className={this.state.adressNum===2 ? "choose_address_is" : ""}
                                        onClick={()=>this.handlerChangeAdressNum(2)}
                                    >地铁站</li>
                                </ul>
                                <div style={{display:this.state.adressNum===1 ? "flex" : "none"}} className="choose_address_connect">
                                    <div className="choose_address_connect_l">
                                        {cardList.district.subItems.map((v,k)=>{
                                            return(
                                                <div
                                                    key={v.id} 
                                                    onClick={()=>this.handlerChangedistrictId(v.id,v.name)}
                                                    className = {this.state.districtId === v.id ? "l_item_active" : null}
                                                >{v.name}<span>({v.count})</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="choose_address_connect_r">
                                        {
                                            cardList.district.subItems[cardList.district.subItems.findIndex((v)=>{
                                                return v.id===this.state.districtId
                                            })].hasOwnProperty("subItems") ? cardList.district.subItems[cardList.district.subItems.findIndex((v)=>{
                                                    return v.id===this.state.districtId
                                                })].subItems.map((item)=>{ 
                                                    return (
                                                        <div 
                                                            key={item.id} 
                                                            onClick={()=>this.handlerChangeItemId(item.id,item.name==="全部"?this.state.adressTitle:item.name)}
                                                            className={this.state.itemId === item.id ? "connect_r_active" : null}
                                                            ><b>{item.name}</b>
                                                            <span>{item.count}</span>
                                                        </div>
                                                    )
                                                }) : null   
                                        }
                                    </div>
                                </div>
                                <div style={{display:this.state.adressNum===2 ? "flex" : "none"}} className="choose_address_connect">
                                    <div className="choose_address_connect_l">
                                        {cardList.subway.subItems.map((v,k)=>{
                                            return(
                                                <div
                                                    key={v.id} 
                                                    onClick={()=>this.handlerChangelineId(v.id,v.name)}
                                                    className = {this.state.lineId === v.id ? "l_item_active" : null}
                                                >{v.name}<span>({v.count})</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="choose_address_connect_r">
                                        {
                                            cardList.subway.subItems[cardList.subway.subItems.findIndex((v)=>{
                                                return v.id===this.state.lineId
                                            })].hasOwnProperty("subItems") ? cardList.subway.subItems[cardList.subway.subItems.findIndex((v)=>{
                                                    return v.id===this.state.lineId
                                                })].subItems.map((item)=>{
                                                    return (
                                                        <div 
                                                            key={item.id} 
                                                            onClick={()=>this.handlerChangeStationId(item.id,item.name==="全部"?this.state.adressTitle:item.name)}
                                                            className={this.state.itemId === item.id ? "connect_r_active" : null}
                                                            ><b>{item.name}</b>
                                                            <span>{item.count}</span>
                                                        </div>
                                                    )
                                                }) : null   
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                    {/* 品牌 */}
                    {this.state.chooseNum === 2 ? <div className="choose_card_list">
                        <div className="list_wrap" style={{position:this.props.display,top:this.props.tops}}>
                            <div className="brand_list">
                                {cardList.brand.subItems.map((v)=>{
                                    return(
                                        <div 
                                            key={v.id} 
                                            onClick={()=>this.handlerChangeBrandId(v.id,v.name)}
                                            className={v.id===this.state.brandId ? "brand_list_item brand_list_item_active" : "brand_list_item"}
                                            style={{height:"44px",lineHeight:"44px"}}
                                            ><span>{v.name}</span>
                                            <b>{v.count}</b>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                    </div> : null}
                    {/* 特色 */}
                    {this.state.chooseNum === 3 ? <div className="choose_card_list">
                        <div className="list_wrap" style={{position:this.props.display,top:this.props.tops}}>
                            <div className="list_wrap_thr">
                                <div className="serve_title">特色功能</div>
                                <div className="serve_context">
                                    {cardList.service.subItems.map((v)=>{
                                        return(
                                            <span 
                                                key={v.id}
                                                onClick={()=>this.handlerChangeServerId(v.id)}
                                                className={v.id===this.state.serverId ? "context_active" : null}
                                                >{v.name}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className="hallType_title">特殊厅</div>
                                <div className="hallType_context">
                                    {cardList.hallType.subItems.map((v)=>{
                                        return(
                                            <span 
                                                key={v.id}
                                                onClick={()=>this.handlerChangeHallTypeId(v.id)}
                                                className={v.id===this.state.hallTypeId ?"context_active" :null}
                                                >{v.name}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className="serve_button">
                                    <span 
                                        className="cancel_btn"
                                        onClick={()=>this.handlerCencle()}
                                    >重置</span>
                                    <span 
                                        className="confirm_btn"
                                        onClick={()=>this.handlerConfirm()}
                                    >确定</span>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                </div>
                
            )
        }
        
    }
}

const mapStateTpProps = state =>({
    cardList : state.posts.cardList,
    posts : state.posts.items,
    seats : state.posts.seats={}
})
export default connect(mapStateTpProps,{ getChooseCard,getAllCinemaList,getMoreCinema })(ChooseCard) 
