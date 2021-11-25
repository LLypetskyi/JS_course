//  Створити функцію, яка видає 10 рандомних кольорів користувачу. 
// Поміщає їх в блоки. Користувач має обрати колір на клік. 
// І після того комп'ютер показує який колір був вибраний

const button = document.querySelector('button');
let fon = document.querySelector('wrapper');
// const colorCode = document.querySelector ('') Куди передавати код по "кліку по блоку"?;

button.addEventListener('click',() =>{
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  console.log(color);
  fon.style.backgroundColor = color;
})