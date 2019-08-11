// 主页
import React, { Component } from 'react'
import { NavLink,Link,} from "react-router-dom"
import Nav from "../../components/Nav"
import Headers from "../../components/Headers"
import "../../assets/css/movie/index.css"
import "../../assets/css/movie/detail.css"
// import {connect} from 'react-redux'
// import {getAllMovieList} from '../../store/actions/Movie'

import { ListView } from 'antd-mobile';
import axios from "axios"
import filter from '../../common/Filters'
let data = []
const NUM_ROWS = 12;
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

 class Movie extends Component {
     constructor(props){
         super(props)
        //  console.log(111)
         const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
         this.state = {
            City:[],
            name:'北京',
            cityId:1,
            dataSource,
            isLoading: true
         }
         
     }
    async componentDidMount() {
        const res= await axios.get("maoyan/ajax/movieOnInfoList?cityid="+localStorage.cityId)
        movieIds=res.data.movieIds;
        // console.log(movieIds);
        const ress =  await axios.get(`/maoyan/ajax/moreComingList?token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&movieIds=${movieIds.slice(pageIndex*12,(pageIndex+1)*12)}`);
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
    }

    onEndReached = async (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        this.rData = { ...this.rData, ...genData(++pageIndex) };
        
        // console.log(movieIds.slice(pageIndex*12,(++pageIndex)*12))
        const res =  await axios.get(`/maoyan/ajax/moreComingList?token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&movieIds=${movieIds.slice(pageIndex*12,(pageIndex+1)*12)}`);
        data = res.data.coming.reverse();

        

        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 100);

    }
    getNull = async (event) =>{
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        this.rData = { ...this.rData, ...genData(--pageIndex) };
        // console.log(333,pageIndex);
        // console.log(movieIds.slice(pageIndex*12,(++pageIndex)*12))
        const res =  await axios.get(`/maoyan/ajax/moreComingList?token=KG26PDO4NUGljWWBG8KRnmL7bmYAAAAAzwgAAKGUiXnjZvA0mK9pk5pyjoVK_Kr3sPycbTM_q5H9h19sFNDXhLSqb_WnoaeqUHJvkw&movieIds=${movieIds.slice(pageIndex*12,(pageIndex+1)*12)}`);
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
        }
        let { listWei } = this.props
        if(JSON.stringify(listWei) === "{}"){
            return(
                null
            )
        } 
        // console.log(444,pageIndex);
        let index = data.length - 1;

        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
              index = data.length - 1;
            }
            const obj = data[index--];
            
            
            return (
                <div className="movie-warp">
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
                                pathname:"/movie/comingsoon/",
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
                    
                    {obj!==undefined?
                        <div className="movie_body" >
                            <ul>
                                <Link to={"/moviedetail/"+obj.id} >
                                
                                    <li>
                                        <div className="pic_show">
                                        
                                            <img src={filter.filter(obj.img,"128.180")} alt="" />
                                        </div>
                                        <div className="info_list">
                                            <h2>{obj.nm}</h2>
                                            <p>观众评 <span className="grade">{obj.sc}</span></p>
                                            <p>主演:{obj.star}</p>
                                            <p>{obj.showInfo}</p>
                                        </div>
                                        <div className="btn_mall">
                                        
                                        { obj.preShow?<div style={{background:'blue'}}>预售</div>:"购票"}
                                        </div>
                                    </li>
                                </Link>
                        </ul>
                    </div>:[]
                    }
                    <Nav></Nav>
                </div>
                
            </div>
              </div>
            );
      
          }

        return (
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
        )
    }

    // componentDidMount() {
    //     this.props.getAllMovieList(localStorage.cityId);
        
    // }
    
}
export default Movie;
// const mapStateTpProps = state =>({
//     listWei : state.listWei.goods
// })
// export default connect(mapStateTpProps,{ getAllMovieList })(Movie)