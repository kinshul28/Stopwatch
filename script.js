// const second= 1000, minute= 60*second, hour= 60*minute;
// const seconds0=0, minutes0=0, hours0=0
const displayhours= document.querySelector(".hours")
const displayminutes= document.querySelector(".minutes")
const displayseconds= document.querySelector(".seconds")

// hours.innerText= 0
// minutes.innerText=0
// seconds.innerText=0

let hours = 0
let minutes=0
let seconds=0

displayhours.innerText=0;
displayminutes.innerText=0;
displayseconds.innerText=0;

var start;

console.log(`${hours}:${minutes}:${seconds}`)
    
const stopwatch=()=>{    
        
        if(minutes==59)
        {
            hours=hours+1;
            minutes=0
            displayhours.innerText=String(hours).padStart(2,"0");
            displayminutes.innerText= String(minutes).padStart(2,"0");
        }
        
        if(seconds==59)
        {
            minutes+=1;
            seconds=0;
            displayminutes.innerText= String(minutes).padStart(2,"0");
            displayseconds.innerText= String(seconds).padStart(2,"0");
        }   
            seconds+=1;
            displayseconds.innerText= String(seconds).padStart(2,"0");
            console.log(`${hours}:${minutes}:${seconds}`)
}

const startstopwatch=()=>{
    start = setInterval(stopwatch, 1000);
}

const stopstopwatch=()=>{
    clearInterval(start)
}

const reset=()=>{
    clearInterval(start)
    hours = 0
    minutes=0
    seconds=0
    displayhours.innerText=0;
    displayminutes.innerText=0;
    displayseconds.innerText=0;
}