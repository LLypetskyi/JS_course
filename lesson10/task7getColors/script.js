//  Створити функцію, яка видає 10 рандомних кольорів користувачу.
// Поміщає їх в блоки. Користувач має обрати колір на клік.
// І після того комп'ютер показує який колір був вибраний

const button = document.querySelector(".button");
const fonBody = document.body;
const elements = document.getElementsByClassName("cub");

// console.log (button);
// console.log (fon);
// console.log (elements);

// then we click on button we change color
let newColor = button.addEventListener("click", setRandonColor);

// function for to get random color
function createRandomColor() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);
  return color;
  // console.log(color);
}

// function setRandonColor() {
//   // маємо пройти по всіх div з класом cub і задати стиль бекграунду
//   for (let elem of elements) {
//     elem.style.background = createRandomColor(); //  добавляємо в css кожному <div> колір бекраунду
//     fonBody.style.background = createRandomColor();
//     console.log(elem.style.background);
//   }
// }

function setRandonColor() {
  let gradient = 'linear-gradient(';
  // маємо пройти по всіх div з класом cub і задати стиль бекграунду
  for (let elem of elements) {
    elem.style.background = createRandomColor(); //  добавляємо в css кожному <div> колір бекраунду
    gradient = gradient + elem.style.background + ',' + ' ';  
    // gradient = gradient + ')';
    // fonBody.style.background = gradient;
    // console.log(elem.style.background);
    // console.log(gradient);
  }
  gradient = gradient + ')'+ ';';
  console.log(gradient);
  fonBody.style.background = gradient;
  console.log (typeof(gradient));
}