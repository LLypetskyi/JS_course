async function getForecast() {
  let responce = await fetch(
    'https://api.openweathermap.org/data/2.5/forecast?lat=49.795367&lon=24.015505&units=metric&appid=ce8942d7d600f4894505d780a2771f91'
  );
  let contentResponce = await responce.json();
  console.log(contentResponce);

  // вивід назви міста
  document.querySelector('.city').innerHTML = contentResponce.city.name;

  // // вивід поточної дати
  let todayDate = new Date();
  let currYear = todayDate.getFullYear();
  let currMonth = todayDate.getMonth() + 1;
  let currDay = todayDate.getDate();
  let rezDate = currDay + '-' + currMonth + '-' + currYear;

  document.querySelector('.date').innerHTML = rezDate;

  // // вивід іконки
  // // https://openweathermap.org/img/wn/04n@2x.png

  // document.querySelector(
  //   '.image'
  // ).innerHTML = `<img src="https://openweathermap.org/img/wn/${contentResponce.weather[0]['icon']}@2x.png">`;
}

getForecast();
