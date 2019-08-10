import React, { Component } from 'react'

import Headers from "../../components/Headers"

class Seats extends Component {

    componentDidMount(){
    }
    render() {
        return (
            <div className="Seats">
                <Headers to="/seats" label="选择座佝"></Headers>
                <div className="main">

                </div>
            </div>
        )
    }
}

// const mapStateTpProps = state =>({
//     seats : state.posts.seats
// })
export default Seats
