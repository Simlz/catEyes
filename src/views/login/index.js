import React, { Component } from 'react'

export default class Login extends Component {
    handlerClick(){
        fetch("http://127.0.0.1:80/sum").then(res=>res.json())
    }
    render() {
        return (
            <div>
                denglu
                <button type="button">??</button>
            </div>
        )
    }
}
