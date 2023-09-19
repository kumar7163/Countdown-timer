const endDate = "20 Dec 2023 10:58 PM";
document.getElementById("end-date").innerText = endDate; 
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = ( end-now)/1000;
    if(diff>=0){  
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff%60));
    }
    else return;
}

clock();
//convert into days
/*
1day = 24 hours
24 hours = 24*60 minutes (1440)
1440 minutes = 1440 * 60 seconds (86400)
1 day = 86400 seconds
1 hour = 3600 seconds
1 minute = 60 seconds
1 second = 1000 miliseconds
*/
setInterval( () => {
    clock();
}, 1000)