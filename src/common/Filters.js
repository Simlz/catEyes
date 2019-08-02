export default {
     currency:(v,type="￥")=>{
        return type + v.toFixed(2)
    },
     filter:(url,arg)=>{
        return url.replace(/w\.h/,arg);
    }
}