

let size = 6;
let i = 0;

while (i < size) {
  lineEmpty = "";
  lineStar = "";
  for (let j = 0; j < size - i; j++) lineEmpty += " ";
  for (let k = 0; k < 2 * i + 1; k++) lineStar += "*";
  console.log(lineEmpty + lineStar);
  i++;
}