let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec")
let am = document.getElementById("am")

function livetime(){
    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();

    if(hrs>12){
        hrs=hrs-12;
        ams= "PM"
    }
    else if (hrs==0){
        hrs = 12;
        ams = "AM"
    }

    hrs = hrs<10?'0'+hrs:hrs;
    mins = mins<10?'0'+mins:mins;
    secs = secs<10?'0'+secs:secs;
    
    hr.innerHTML = hrs;
    min.innerHTML = mins;
    sec.innerHTML = secs;
    am.innerHTML = ams;
}

setInterval(livetime,1000);

