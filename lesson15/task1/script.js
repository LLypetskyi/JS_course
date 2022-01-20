// const responce = fetch(
//   'https://api.openweathermap.org/data/2.5/weather?lat=49.795367&lon=24.015505&appid=ce8942d7d600f4894505d780a2771f91'
// );

async function getForecast() {
  let responce = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=49.795367&lon=24.015505&appid=ce8942d7d600f4894505d780a2771f91'
  );
  let contentResponce = await responce.json();
  console.log(contentResponce);
}

getForecast();

// отримали json з відповідними полями
// ??? Як достукатись до потрібного ключ-значення і присобачити його до відповідного <div>
