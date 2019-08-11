// 主页
import React, { Component } from 'react'
import {
    NavLink,
    Link
} from "react-router-dom"

import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/movie/comingSoon.css"
import '../../assets/css/movie/citylist.css'
import axios from 'axios'
import filter from '../../common/Filters'

import { ListView } from 'antd-mobile';

let data = []
const NUM_ROWS = 9;
let pageIndex = 0;
let movieIds =[];
 function genData(pIndex = 0) {

  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
    // console.log(dataBlob[`${ii}`]);
  }
//   console.log(dataBlob)
  return dataBlob;
}

 class ComingSoon extends Component {
    constructor(props){
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
          console.log(111)
        this.state = {
            Central:{},
            citylist:[],
            name:'北京',
            cityId:1,
            dataSource,
            isLoading: true,
        }
        // console.log(this.state)
    }
    getComing=()=>{
        axios.get("/maoyan/ajax/mostExpected?ci=230&limit=50&offset=0&token=")
        .then(({data})=>{
            this.setState({
                citylist:data.coming
            })
            // console.log(data)
        })   
    }
    async componentDidMount() {
        const res= await axios.get("/maoyan/ajax/comingList?ci=230&token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&limit=10")
        movieIds=res.data.movieIds;
        // console.log(movieIds);
        
        const ress =  await axios.get("/maoyan/ajax/comingList?ci=230&token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&limit=10&movieIds="+movieIds.slice(pageIndex*9,(pageIndex+1)*9));
        data = ress.data.coming.reverse();

        // console.log(222,data);
        setTimeout(() => {
            this.rData = genData();
            this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
            },function(){
            // console.log(11111,this.state.dataSource)
            });
        }, 100);
        
        this.getComing()
    }
    onEndReached = async (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        this.rData = { ...this.rData, ...genData(++pageIndex) };
        
        
        console.log(movieIds.slice(pageIndex*9,(++pageIndex)*9))
        const res =  await axios.get("/maoyan/ajax/comingList?ci=230&token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&limit=10&movieIds="+movieIds.slice(pageIndex*9,(++pageIndex)*9));
        data = res.data.coming;
        // console.log(333,data);
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 100);

    }
    getNull = async () =>{
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        this.rData = { ...this.rData, ...genData(--pageIndex) };
        
        // console.log(movieIds.slice(pageIndex*12,(++pageIndex)*12))
        const res =  await axios.get(`/maoyan/ajax/comingList?ci=230&token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&limit=10&movieIds=${movieIds.slice(pageIndex*12,(pageIndex+1)*12)}`);
        data = res.data.coming.reverse();

        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 100);
    }
    render() {
        if(!this.props.location.state){
            this.props.location.state = {id:1};
            // this.props.location.state.id = 1;
            // this.props.location.state.name = "北京";
        }
        let { citylist } = this.props
        if(JSON.stringify(citylist) === "{}"){
            return(
                null
            )
        } 

        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
              index = data.length - 1;
            }
            const obj = data[index--];
        return (
            <div className="movieWart">
            <div className="movie">
                <Headers to="/" label="猫眼电影"></Headers>
                <div className="main">
                    <div className="second_menu">
                        <NavLink to="/citylist" className="choose_city">
                            <p>{localStorage.name?localStorage.name:this.state.name}</p>
                            <p className="triangle_gray"></p>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="active">
                            <p>正在热映</p>
                        </NavLink>
                        <NavLink exact to={{
                            pathname:"/movie/comingsoon",
                            state:{
                                name:this.props.location.state.name
                            }
                        }} activeClassName="active">
                            <p>即将上演</p>   
                        </NavLink>
                        <NavLink to="/search">
                            <p className="iconfont">&#xe68d;</p>
                        </NavLink>
                    </div>

                    <div className="warp-lis1">
                        <div className="movie_body">
                            
                                <div className="title">
                                    {obj.comingTitle}
                                </div>
                                <ul>
                                    <Link key={obj.id} to={'/detailsdetails/'+obj.id}>
                                        <li>
                                            <div className="pic_showimg"><img src={filter.filter(obj.img,"128.180")} alt="" /></div>
                                            <div className="info_list">
                                                <h2>{obj.nm}</h2>
                                                <p><span className="grade">{obj.wish}</span>人想看</p>
                                                <span>主演:{obj.star}</span>
                                                <p>{obj.rt}上映</p>
                                            </div>
                                            <div className="btn_mall">
                                            { obj.showst===4?<div style={{background:'blue'}}>预售</div>:<div style={{background:'#faaf00'}}>想看</div>}
                                            </div>
                                        </li>
                                    </Link>
                                </ul> 
                        </div>
                    </div>
                </div>
                                <Nav></Nav>
            </div>
            </div>
        )
            }
            return (
                <>
                <div className="warp">
                        <div className="movie_body1">
                        <p>近期最受期待</p>
                        <ul>
                            {
                                this.state.citylist.map((v,i)=>{
                                return(
                                        <a href={`/maoyan/movie/${v.id}?_v_=yes&channelId=4&cityId=1&$from=canary#`} key={i}>
                                            <li>
                                                <div className="pic_show"><img src={filter.filter(v.img,"170.200")} alt="" /></div>
                                                <div className="info_list">
                                                    <p>{v.nm}</p>
                                                    <span>{v.comingTitle}</span>
                                                </div>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                            </ul>       
                        </div>
                        <div className="middle"></div>
                    </div>


                <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
              {/* {this.state.isLoading ? '加载中请等候...' : 'Loaded'} */}
            </div>)}
            renderRow={row}
            // renderSeparator={separator}
            className="am-list"
            pageSize={4} 
            useBodyScroll
            // onScroll={() => { console.log('scroll'); }}
            scrollRenderAheadDistance={500}
            onEndReached={this.getNull}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
          />
          </>
            )
    }
    // getCentral(){
    //     axios.get("/maoyan/ajax/comingList?ci=230&token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&limit=10")
    //     .then(({data})=>{
    //         let result =  data.coming.reduce((obj, item)=>{
    //             // obj[item.comingTitle] = obj[item.comingTitle] || []
    //             if(obj[item.comingTitle]) {
    //                 obj[item.comingTitle].push(item)
    //             }
    //             else {
    //                 obj[item.comingTitle] = [item]
    //             }
    //             return obj                
    //         },{})
    //         this.setState({
    //             Central:result
    //         })
    //         // console.log(data.coming);
    //     })
    // }
    // getComing=()=>{
    //     axios.get("/maoyan/ajax/mostExpected?ci=230&limit=50&offset=0&token=")
    //     .then(({data})=>{
    //         this.setState({
    //             citylist:data.coming
    //         })
    //         // console.log(data)
    //     })   
    // }

    

    // componentDidMount() {
    //     this.getComing();
    //     this.getCentral();
        
    // }
    
}
export default ComingSoon