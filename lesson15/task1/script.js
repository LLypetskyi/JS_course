async function getWeather() {
  let responce = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=49.795367&lon=24.015505&units=metric&appid=ce8942d7d600f4894505d780a2771f91'
  );
  let contentResponce = await responce.json();

  // // вивід назви міста
  document.querySelector('.city').innerHTML = contentResponce.name;

  let todayDate = new Date();
  let currYear = todayDate.getFullYear();
  let currMonth = todayDate.getMonth() + 1;
  let currDay = todayDate.getDate();
  let rezDate = currDay + '/' + currMonth + '/' + currYear;

  // // вивід поточної дати
  document.querySelector('.date').innerHTML = rezDate;
  // // вивід температури повітря
  document.querySelector('.temp').innerHTML = contentResponce.main.temp;
  // // вивід вологості повітря
  document.querySelector('.humidity').innerHTML = contentResponce.main.humidity;
  // // вивід хмарності
  document.querySelector('.clouds').innerHTML = contentResponce.clouds.all;
  // // вивід іконки
  // https://openweathermap.org/img/wn/04n@2x.png

  document.querySelector(
    '.image'
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${contentResponce.weather[0]['icon']}@2x.png">`;
}

getWeather();
