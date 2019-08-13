import React, { Component } from 'react'
import axios from "axios"
import Headers from "../../components/Headers"
import "../../assets/css/login/index.css"
import Logo from "../../assets/images/logo.png"

export default class Login extends Component {
    constructor(props){
       super(props) 
       this.state={
           phone : "",
           passWord : "",
           errMsg : "",
           errCode : "",
           btnTitle:"获取验证码",
           disabled:false
       }
    }
    handlerChangePhone(e){
        this.setState({
            phone : e.target.value
        })
    }
    handlerChangePassWord(e){
        this.setState({
            passWord : e.target.value
        })
    }
    getVerifyCode(){
        if(this.state.phone===""){
            this.setState({
                errMsg:"手机号不能为空"
            })
            return false
        }else if(!/^1[345678]\d{9}$/.test(this.state.phone)){
            this.setState({
                errMsg:"请填写正确的手机号"
            })
            return false
        }else{
            this.setState({
                errMsg:""
            })
            let time = 60;
            let timer = setInterval(() => {
                if (time === 0) {
                clearInterval(timer);
                this.setState({
                    btnTitle:"获取验证码"
                })
                this.setState({
                    disabled:false
                })
                } else {
                // 倒计时
                this.setState({
                    btnTitle:time + "秒后重试"
                })
                this.setState({
                    disabled:true
                })
                time--;
                }
            }, 1000); 
            axios.post("/api/posts/sms_send", {
                tpl_id: "178860",
                key: "4765fa980d9ef12b7cf3db400011b724",
                phone: this.state.phone
            })
            .then(res => {
                console.log(res);
            });
        }
    }
    handlerLogin(){
        // 取消错误提醒
      this.setState({
          errMsg:""
      })
      // 发送请求
      axios
        .post("/api/posts/sms_back", {
          phone: this.state.phone,
          code: this.state.passWord
        })
        .then(res => {
          // console.log(res);
          // 检验成功 设置登录状态并且跳转到/
          localStorage.setItem("my_login", true);
          this.props.history.go(-1)
        })
        .catch(err => {
          // 返回错误信息
          this.setState({
            errCode : err.response.data.msg
          })
        });
    }
    componentWillMount(){
        if(localStorage.my_login){this.props.history.push("/")}
    }
    render() {
        return (
            <div className="user_login">
                <Headers to="/login" label="登录"></Headers>
                <div className="main">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div 
                        className="user_phone" 
                        style={{borderColor:this.state.errMsg==="" ? "#ccc" : "red"}}
                        ><input 
                            type="text" 
                            placeholder="  请输入手机号"
                            onChange={(e)=>this.handlerChangePhone(e)}
                            value={this.state.phone}
                        />
                    </div>
                    <div 
                        className="errMsg"
                        style={{display:this.state.errMsg===""?"none":"block"}}
                    >{this.state.errMsg}
                    </div>
                    <div className="verify_code">
                        <input 
                            type="text" 
                            placeholder="  请输入验证码"
                            onChange={(e)=>this.handlerChangePassWord(e)}
                        />
                        <button 
                            className="login_get_verifycode" 
                            onClick={()=>this.getVerifyCode()}
                            style={{border:"none",background:"#fff"}}
                            disabled={this.state.disabled}
                        >{this.state.btnTitle}</button>
                    </div>
                    <div className="login_des">
                        <p>即将登录，表示已同意<span>《用户服务协议》</span></p>
                    </div>
                    <div className="button">
                        <button 
                            className="do_login" 
                            onClick={()=>this.handlerLogin()} 
                            type="button"
                            disabled={this.state.phone==="" || this.state.passWord===""?true:false}
                        >登录</button>
                        <button 
                            className="do_concle" 
                            onClick={()=>this.props.history.push("/")}
                        >返回首页</button>
                    </div>
                </div>
            </div>
        )
    }
}
