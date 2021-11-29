//  Створити функцію, яка видає 10 рандомних кольорів користувачу.
// Поміщає їх в блоки. Користувач має обрати колір на клік.
// І після того комп'ютер показує який колір був вибраний

const button = document.querySelector(".button");
// const fonBody = document.body;
const fonBody = document.getElementsByClassName('body');
const elements = document.getElementsByClassName("cub");


// then we click on button we change color
let newColor = button.addEventListener("click", () => {
resetColors();
});

// function for to get random color
function createRandomColor() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);
  return color;
  // console.log(color);
}


// Сергій Колесник, [29.11.2021 12:35]
// arr.forEach(item => {
//         const randomColor = generateRandomColor();
//         item.style.background = randomColor;
//         gradientBackground +=', ' + randomColor ;
//     })

function resetColors() {
    let gradientBackground = 'linear-gradient(90deg';
    for (let item of elements)
    // elements.forEach(item =>
     {
        const randomColor = createRandomColor();
        item.style.background = randomColor;
        gradientBackground +=', ' + randomColor ;
    }
    gradientBackground += ' )';
    console.log(gradientBackground);
    document.body.style.background = gradientBackground;
}

function setRandonColor() {
  let gradient = 'linear-gradient(to right, ';
  // маємо пройти по всіх div з класом cub і задати стиль бекграунду
  for (let elem of elements) {
    elem.style.background = createRandomColor(); //  добавляємо в css кожному <div> колір бекраунду

     gradient += elem.style.background + ',' + ' ';  
    // gradient = gradient + ')';
    // fonBody.style.background = gradient;
    // console.log(elem.style.background);
    // console.log(gradient);
  }

  debugger;

  gradient += 'rgb(85, 170, 187)' + ')'+ ';';
  console.log(gradient);
  console.log(typeof(gradient));
  document.body.style.background = gradient;
  console.log(fonBody);

  //  document.body.style.background = gradientBackground;

document.body.style.background = gradientBackground;
console.log(document);
console.log(document.body);
console.log(document.body.style.background);

  // fonBody[0].style.background = gradient;
  // console.log (typeof(gradient));
}
// console.log(fonBody);
