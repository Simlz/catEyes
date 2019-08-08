export const dataNow = function(){
    let myDate = new Date()
    return myDate.getFullYear()+"-"+(myDate.getMonth()/1+1)+"-"+myDate.getDate()
}

export const cheange_wh = (url,arg)=>{
    return url.replxace(/w\.h/,arg);
}

export const afterShow = (startTime,movieTime)=>{
    let timeArr = startTime.split(":")
    let hour = parseInt((timeArr[0]*60+timeArr[1]/1+movieTime/1)/60)
    if(hour>=24){
        hour = hour-24
    }
    let minute = (timeArr[0]*60+timeArr[1]/1+movieTime/1)%60
    if(minute<10){
        minute = "0"+minute
    }
    return hour+":"+minute
}