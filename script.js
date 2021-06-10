var hr=00;
var sec=00;
var min=00;
var count=00;
var timer=false;

// working of start button
document.getElementById("start").addEventListener("click",function(){
    timer=true;
    stopwatch();

})

//working of stop button
document.getElementById("stop").addEventListener("click",function(){
    timer=false;
    
})

//working of  reset button
document.getElementById("reset").addEventListener("click",function(){
    timer=false;
    hr=00;
    sec=00;
    min=00; 
    count=00;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("count").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
})

//working of stopwatch
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        var hrs=hr;
        var secs=sec;
        var mins=min;
        var counts=count;
        if(sec<10){
            secs="0"+secs;
        }
        if(count<10){
            counts="0"+counts;
        }
        if(hr<10){
            hrs="0"+hrs;
        }
        if(min<10){
            mins="0"+mins;
        }
        document.getElementById("count").innerHTML=counts;
        document.getElementById("sec").innerHTML=secs;
        document.getElementById("min").innerHTML=mins;
        document.getElementById("hr").innerHTML=hrs;
        setTimeout("stopwatch()",10);
    }

}