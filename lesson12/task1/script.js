function createReverseArray(inputArray) {
  let outputArray = [];
  for (const item of inputArray) {
    outputArray.unshift(item);
  }
  return outputArray;
}
const inputArray = [1, 2, 3, 4, 5, 6, 9, 10];
console.log("this is the original input array ", inputArray);
console.log("this is the revers result array ", createReverseArray(inputArray));
