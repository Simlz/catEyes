import React, { Component } from 'react'
import { connect } from "react-redux"

import { getChooseCard } from "../store/actions/Cinema/index"

import "../assets/css/components/chooseCard.css"

class ChooseCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            chooseNum : 0,
            adressNum : 1,
            adressId : -1,
            lineId : -1
        }
    }
    handlerChangeChooseNum(num){
        this.setState({
            chooseNum : num
        })
    }
    handlerChangeAdressNum(num){
        this.setState({
            adressNum : num
        })
    }
    handlerChangeAdressId(num){
        this.setState({
            adressId : num
        })
    }
    handlerChangeLineId(num){
        this.setState({
            lineId : num
        })
    }
    componentDidMount(){
        this.props.getChooseCard(1)
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
                    <div className="choose_card">
                        <div className="choose_card_item" onClick={()=>this.handlerChangeChooseNum(1)}> 
                            <p style={{color:this.state.chooseNum === 1 ? "#e54847" : ""}}>全城</p>
                            {this.state.chooseNum === 1 ? <p className="triangle_red"></p> : <p className="triangle_gray"></p>}
                        </div>
                        <div className="choose_card_item" onClick={()=>this.handlerChangeChooseNum(2)}>
                            <p style={{color:this.state.chooseNum === 2 ? "#e54847" : ""}}>品牌</p>
                            {this.state.chooseNum === 2 ? <p className="triangle_red"></p> : <p className="triangle_gray"></p>}
                        </div>
                        <div className="choose_card_item" onClick={()=>this.handlerChangeChooseNum(3)}>
                            <p style={{color:this.state.chooseNum === 3 ? "#e54847" : ""}}>特色</p>
                            {this.state.chooseNum === 3 ? <p className="triangle_red"></p> : <p className="triangle_gray"></p>}
                        </div>
                    </div>
                    {/* 地区 */}
                    {this.state.chooseNum === 1 ? <div className="choose_card_list">
                        <div className="list_wrap">
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
                                                    className="choose_address_connect_l_item"
                                                    onClick={()=>this.handlerChangeAdressId(v.id)}
                                                    className = {this.state.adressId === v.id ? "l_item_active" : null}
                                                >{v.name}<span>({v.count})</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="choose_address_connect_r">
                                        {
                                            cardList.district.subItems[cardList.district.subItems.findIndex((v)=>{
                                                return v.id===this.state.adressId
                                            })].hasOwnProperty("subItems") ? cardList.district.subItems[cardList.district.subItems.findIndex((v)=>{
                                                    return v.id===this.state.adressId
                                                })].subItems.map((item)=>{
                                                    return (
                                                        <div key={item.id}>{item.name}</div>
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
                                                    className="choose_address_connect_l_item"
                                                    onClick={()=>this.handlerChangeLineId(v.id)}
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
                                                        <div key={item.id}>{item.name}</div>
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
                        <div className="list_wrap">
                            {cardList.brand.subItems.map((v)=>{
                                return(
                                            <div key={v.id} calssName="brand_list">
                                                <span>{v.name}</span>
                                                <b>{v.count}</b>
                                            </div>
                                )
                            })}
                        </div>
                        
                    </div> : null}
                    {/* 特色 */}
                    {this.state.chooseNum === 3 ? <div className="choose_card_list">
                        <div className="list_wrap">
                            <div className="serve_title">特色功能</div>
                            {cardList.service.subItems.map((v)=>{
                                return(
                                    <span key={v.id}>{v.name}</span>
                                )
                            })}
                            <div className="hallType_title">特殊厅</div>
                            {cardList.hallType.subItems.map((v)=>{
                                return(
                                    <span key={v.id}>{v.name}</span>
                                )
                            })}
                        </div>
                    </div> : null}
                </div>
                
            )
        }
        
    }
}

const mapStateTpProps = state =>({
    cardList : state.posts.cardList
})
export default connect(mapStateTpProps,{ getChooseCard })(ChooseCard) 
