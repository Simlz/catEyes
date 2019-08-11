import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

// 电影
import ComingSoon from "./views/movie/ComingSoon"
import MovieDetail from './views/movie/MovieDetail'
import DetailsDetails from './views/movie/DetailsDetails'

// 我的
import MyMovie from "./views/myCenter/MyMovie"
import Store from "./views/myCenter/Store"
import Vod from "./views/myCenter/Vod"
import MyCoupon from "./views/myCenter/MyCoupon"
import MemberCard from "./views/myCenter/MemberCard"
import Shows from "./views/cinema/Shows"
import CinemaDetail from "./views/cinema/CinemaDetail"

import Routers from "./router"
import './App.css';

class App extends React.Component{
  render(){
    return(
      <Router forceRefresh={true}>
        {Routers.map((v,k) => {
          return(
            <Route path={v.path} component={v.component} key={k} exact={v.exact}></Route>
          )
        })}
        <Route path="/mycenter/mymovie" component={MyMovie}></Route>
        <Route path="/mycenter/store" component={Store}></Route>
        <Route path="/mycenter/vod" component={Vod}></Route>
        <Route path="/mycenter/mycoupon" component={MyCoupon}></Route>
        <Route path="/mycenter/membercard" component={MemberCard}></Route>
        <Route exact path="/movie/comingsoon" component={ComingSoon}></Route>
        <Route path="/cinema/shows/:id" component={Shows}></Route>
        <Route path="/cinema/cinemadetail/:id" component={CinemaDetail}></Route>
        <Route path="/moviedetail/:id" component={MovieDetail}></Route>
        <Route path="/detailsdetails/:id" component={DetailsDetails}></Route>
      </Router>
    )
  }
}

export default App;
