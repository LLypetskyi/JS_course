//  Створити функцію, яка видає 10 рандомних кольорів користувачу. 
// Поміщає їх в блоки. Користувач має обрати колір на клік. 
// І після того комп'ютер показує який колір був вибраний

const button = document.querySelector('button');
const fon = document.querySelector('wrapper');
const elements = document.querySelector('.cub');


// function for to get random color
function randomColor() {
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  console.log(color);
};

// then we click on button we change color
let newColor = button.addEventListener('click', randomColor);


// маємо пройти по всіх div з класом cub і задати стиль бекграунду 
for (let elem of elements){ 
//  добавляємо в css колір бекраунду
elements.style.backgroundColor = 'red'; // Функція підбору кольору
console.log (elements.style.backgroundColor);
}


//   // element(бекшраундКолор) = color;
//   // }}
  




