import Movie from "../views/movie"
import Cinema from "../views/cinema"
import Mine from "../views/myCenter/Mini"
import Search from "../views/movie/Search"
import CityList from "../views/movie/CityList"
import Login from "../views/login"

export default [
    {
        // 首页（电影）
        id:1,
        to:"/",
        path:"/",
        exact:true,
        context:"电影",
        icon:"iconfont icon-dianying",
        component:Movie,
        meta:{
            keywords:""
        },
        children:[

        ]
    },{
        // 影院
        id:2,
        to:"/cinema",
        path:"/cinema",
        exact:true,
        context:"影院",
        icon:"iconfont icon-yingyuanb",
        component:Cinema,
        meta:{
            keywords:""
        },
        children:[

        ]
    },{
        // 我的
        id:3,
        to:"/mini",
        path:"/mini",
        exact:true,
        context:"我的",
        // icon:"iconfont icon-ziyuan",
        component:Mine,
        meta:{
            keywords:""
        },
        children:[

        ]
    },{
        // 我的
        id:40,
        to:"/mine",
        path:"/mine",
        exact:true,
        context:"我的",
        icon:"iconfont icon-ziyuan",
        component:Mine,
        meta:{
            keywords:""
        },
        children:[

        ]
    },{
        // 城市列表
        id:4,
        to:"/citylist/:id",
        path:"/citylist",
        exact:true,
        context:"城市",
        icon:false,
        component:CityList,
        meta:{
            keywords:""
        },
    },{
        // 搜索
        id:5,
        to:"/search",
        path:"/search",
        exact:true,
        context:"搜索",
        icon:false,
        component:Search,
        meta:{
            keywords:""
        },
    },{
        // 登录
        id:6,
        to:"/login",
        path:"/login",
        exact:true,
        context:"登录",
        icon:false,
        component:Login,
        meta:{
            keywords:""
        },
    },
]

