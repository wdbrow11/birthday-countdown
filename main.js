
//Set the date you want to count down to
var countDownDate = new Date("Jul 6, 2019 22:46:00").getTime();

//Set the interval at which the countdown moves
var x = setInterval(function() {
  //Find today's date
  var now = new Date().getTime();
  //Calculate the exact time between today's date and the target date
  var distance = countDownDate - now;
  //Calculate the
  var days = Math.floor(distance/(1000*60*60*24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((distance % (1000 * 60)) / (1000));
  document.getElementById("countdown").innerHTML = `Will's Birthday is in ${days} days ${hours} hours ${mins} minutes and ${secs} seconds!`
  if (distance <0) {
    document.getElementById("countdown").innerHTML = "Will is 30 now!";
  }
}, 1000);
