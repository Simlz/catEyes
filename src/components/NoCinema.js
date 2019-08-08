import React, { Component } from 'react'
import "../assets/css/components/noCinema.css"
import noImg from "../assets/images/nothing.jpg"

class NoCinema extends Component {
    render() {
        return (
            <div className="no_cinema">
                <img src={noImg} alt=""/>
                <div>
                    暂无符合条件的影院
                </div>
            </div>
        )
    }
}
export default NoCinema
