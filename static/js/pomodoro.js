// Initialize variables
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

var pMin = document.getElementById('p_min');
var pSec = document.getElementById('p_sec');

var bMin = document.getElementById('b_min');
var bSec = document.getElementById('b_sec');

var refTimer;

// Add event listeners
start.addEventListener('click', function() {
    if(refTimer == undefined) {
        refTimer = setInterval(timer, 1000)
    }//end if
    else {
        alert("Timer is already running");
    }//end else
})// End start event listener

pause.addEventListener('click', function() {
    stopinterval();
    refTimer = undefined;
})// End pause event listener

reset.addEventListener('click', function() {
    pMin.innerText = 25;
    pSec.innerText = "00";
    bMin.innerText = 5;
    bSec.innerText = "00";

    stopinterval();
    refTimer = undefined;
})// End reset event listener

// Timer Function
function timer() {
    pTimer();
    bTimer();
}//end timer

// Productive Timer
function pTimer() {
    if(pSec.innerText != 0 ) {
        pSec.innerText--;
    }//end if
    else if(pMin.innerText != 0 && pSec.innerText == 0) {
        pSec.innerText = 59;
        pMin.innerText--;
    }//end else if
}//end pTimer

// Break Timer
function bTimer() {
     //Break Timer Countdown
     if(pMin.innerText == 0 && pSec.innerText == 0) {
        if(bSec.innerText != 0 ) {
            bSec.innerText--;
        }//end if
        else if(bMin.innerText != 0 && bSec.innerText == 0) {
            bSec.innerText = 59;
            bMin.innerText--;
        }//end else if
    }//end if
}//end bTimer

//Stop Timer Function
function stopinterval() {
    clearInterval(refTimer);
}//end stopinterval