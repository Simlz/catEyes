// 顶部头
import React, { Component } from 'react'
import {
    Route
} from "react-router-dom"

export default class Headers extends Component {
    componentWillMount(){
        let {label} = this.props
        document.title = label
    }
    render() {
        let {to,label} = this.props
        return (
            <Route 
                path={to}
                exact
                children={(routerProps => {
                    let isBack = routerProps.location.pathname !== "/" ? true : false
                    return (
                        <div className="headers">
                            {isBack ? <button
                                className="goback"
                                onClick={routerProps.history.goBack}
                            >{"<"}</button> : null}
                            <p className="header_title">{label}</p>
                        </div>
                    )
                })}
            ></Route>
        )
    }
}
