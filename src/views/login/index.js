import React, { Component } from 'react'
import Headers from "../../components/Headers"

export default class Login extends Component {
    handlerClick(){
        fetch("http://127.0.0.1:80/sum").then(res=>res.json())
    }
    render() {
        return (
            <div className="user_login">
                <Headers to="/login" label="登录"></Headers>
                <div className="main">
                    denglu
                    <button type="button">登录</button>
                </div>
            </div>
        )
    }
}
