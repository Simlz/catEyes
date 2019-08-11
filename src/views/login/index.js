import React, { Component } from 'react'
import Headers from "../../components/Headers"
import "../../assets/css/login/index.css"
import Logo from "../../assets/images/logo.png"

export default class Login extends Component {
    constructor(props){
       super(props) 
       this.state={
           phone : "",
           passWord : "",
           msg : ""
       }
    }
    handlerClick(){
        fetch("http://127.0.0.1:80/sum").then(res=>res.json())
    }
    handlerLogin(){
        localStorage.maoyanname="1111"
        this.props.history.go(-1)
    }
    componentWillMount(){
        // if(localStorage.maoyanname){this.props.history.push("/")}
    }
    render() {
        return (
            <div className="user_login">
                <Headers to="/login" label="登录"></Headers>
                <div className="main">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="user_phone">
                        <input type="text" placeholder="  请输入手机号"/>
                    </div>
                    <div className="verify_code">
                        <input type="text" placeholder="  请输入验证码"/>
                        <span>获取验证码</span>
                    </div>
                    <div className="login_des">
                        <p>即将登录，表示已同意<span>《用户服务协议》</span></p>
                    </div>
                    <div className="button">
                        <button className="do_login" onClick={()=>this.handlerLogin()} type="button">登录</button>
                        <button className="do_concle" onClick={()=>this.props.history.push("/")}>返回首页</button>
                    </div>
                </div>
            </div>
        )
    }
}
