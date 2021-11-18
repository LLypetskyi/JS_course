// task6

let size = 10;
let line = "";
let lineStar = "";
let resLine = "";

for (let i = 1; i <= size; i++) {
  line += " ";
  for (let j = size; j >= i; j--) {
    lineStar += "*";
  }
  resLine = line + lineStar;
  console.log(resLine);
  lineStar = "";
}
