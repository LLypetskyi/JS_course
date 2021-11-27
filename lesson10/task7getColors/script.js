//  Створити функцію, яка видає 10 рандомних кольорів користувачу. 
// Поміщає їх в блоки. Користувач має обрати колір на клік. 
// І після того комп'ютер показує який колір був вибраний

const button = document.querySelector('button');
const fon = document.querySelector('wrapper');
const elements = document.querySelector('.cub');

// функція рандомайзер кольору
function randomColor() {
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  console.log(color);
}


button.addEventListener('click', randomColor()); //прикліку змінється код кольору
elements.style.background-color = function randomColor(); // Функція підбору кольору

// for (let elem of elements ){}
//   // for (let i=1; i<=element.length; i++){
//   // element(бекшраундКолор) = color;
//   // }}
  



  // button.addEventListener("click", function(){ alert("Hello World!"); }); 
// добавляємо в css колір бекраунду
  // elements.style.background-color = function randomColor(); // Функція підбору кольору


