const proxy = require("http-proxy-middleware")
module.exports = function(app){
    app.use("/maoyan",proxy({
        target:"http://m.maoyan.com/",
        changeOrigin:true,
        pathRewrite:{
            "^/maoyan":""
        }
    }))
    app.use("/api",proxy({
        target:'https://ele-interface.herokuapp.com/api/',
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}