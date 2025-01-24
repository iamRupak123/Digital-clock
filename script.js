const hr =document.getElementById('box1')
const mm = document.querySelector("#box2")
const se = document.querySelector("#box3")
 

function updateClock(){
    let hour =  new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    // update inner html

    hr.innerHTML = hour < 10 ? "0" + hour : hour;
    mm.innerHTML = min < 10 ? "0" + min : min;
    se.innerHTML = sec < 10 ? "0" + sec : sec;
}

setInterval(updateClock,1000)

updateClock()


 

