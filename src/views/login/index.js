import React, { Component } from 'react'
import Headers from "../../components/Headers"

export default class Login extends Component {
    handlerClick(){
        fetch("http://127.0.0.1:80/sum").then(res=>res.json())
    }
    handlerLogin(){
        localStorage.maoyanname="1111"
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="user_login">
                <Headers to="/login" label="登录"></Headers>
                <div className="main">
                    <input type="text" placeholder="请输入手机号"/>
                    
                    <button onClick={()=>this.handlerLogin()} type="button">登录</button>
                    <button onClick={()=>this.props.history.push("/")}>返回首页</button>
                </div>
            </div>
        )
    }
}
