var timeleft = 300;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 300 - timeleft;
  timeleft -= 1;
}, 300);