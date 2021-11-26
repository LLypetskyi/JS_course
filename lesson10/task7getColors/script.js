//  Створити функцію, яка видає 10 рандомних кольорів користувачу. 
// Поміщає їх в блоки. Користувач має обрати колір на клік. 
// І після того комп'ютер показує який колір був вибраний

const button = document.querySelector('button');
const fon = document.querySelector('wrapper');
const element = document.getElementsByClassName('cub');

button.addEventListener('click',() =>{
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  console.log(color);
  for (let i=1; i<=element.length; i++){
  element[i] = color;
  }
  });



  // button.addEventListener("click", function(){ alert("Hello World!"); }); 