const battlefield = document.querySelector('#battlefield');
// console.log(battlefield); ok Отримали все ігрове поле
let step = 0;

battlefield.addEventListener('click', (event) => {
  if ((event.target.className = 'field')) {
    if (!event.target.innerHTML) {
      if (step % 2 === 0 && event.target.innerHTML == '') {
        event.target.innerHTML = 'X';
      } else {
        event.target.innerHTML = '0';
      }
      step++;
      check();
    }
  }
});

const check = function () {
  const gameFields = document.getElementsByClassName('field');
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  // let winArr = [];
  for (let i = 0; i < winCombination.length; i++) {
    if (
      gameFields[winCombination[i][0]].innerHTML == 'X' &&
      gameFields[winCombination[i][1]].innerHTML == 'X' &&
      gameFields[winCombination[i][2]].innerHTML == 'X'
    )
      alert('X - win!!!');
    else if (
      gameFields[winCombination[i][0]].innerHTML == '0' &&
      gameFields[winCombination[i][1]].innerHTML == '0' &&
      gameFields[winCombination[i][2]].innerHTML == '0'
    )
      alert('0 - win!!!');
    // else if ((i = 9)) alert('friendship won!!!!');
  }
};
