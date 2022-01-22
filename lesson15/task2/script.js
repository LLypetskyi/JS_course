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

  function createCardElement(data) {
    const div = document.createElement('div');
    let cardTemplate = `<div class="card">
                <div class="icon"></div>
                <div> Станом на: <span class="time">${data.dt_txt}</span> </div>
                <div>Температура повітря: <span class="temp"> </span> °C</div>
                <div>Вологість повітря: <span class="humidity"> </span> %</div>
                <div>Хмарність : <span class="clouds"> </span> %</div>
            </div>`;
    div.innerHTML = cardTemplate.trim();
    return div.firstChild;
  }

  function addCardToPage(cardElement, cardsContainer) {
    cardsContainer.appendChild(cardElement);
  }

  function isThreeOclock(dateTime) {
    const time = dateTime.substr(11);
    return time === '15:00:00';
  }

  const threeOclockItems = contentResponce.list.filter((dataItem) =>
    isThreeOclock(dataItem.dt_txt)
  );

  for (const dataItem of threeOclockItems) {
    let cardElement = createCardElement(dataItem);
    addCardToPage(cardElement, document.querySelector('.nav'));
  }
}

getForecast();
