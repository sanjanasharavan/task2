var seconds = 900, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000)
   
    
   
})();


