// task5

let size = 10;
let lineStar = "";
let lineEmpty = "";
let resLine = "";

for (let i = 1; i <= size; i++) {
  lineStar = lineStar + "*";

  for (let j = 9; j >= i; j--) {
    lineEmpty = lineEmpty + " ";
  }
  resLine = lineEmpty + lineStar;
  console.log(resLine);
  lineEmpty = "";
}
