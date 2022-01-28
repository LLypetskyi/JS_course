// var clock = document.getElementById('clock');

function clock() {
  const time = new Date();
  const hours = time.getHours().toString();
  const minutes = time.getMinutes().toString();
  const seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  console.log(hours + ':' + minutes + ':' + seconds);
}

clock();
setInterval(clock, 1000);
