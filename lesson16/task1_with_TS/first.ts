

function clock(): void {
  const time: Date = new Date();
  let hours: string = time.getHours().toString();
  let minutes: string = time.getMinutes().toString();
  let seconds: string = time.getSeconds().toString();

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
