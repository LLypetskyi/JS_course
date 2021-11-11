// 2 Кількість столів

// Приклад:
// 1 - число яке ми получили в prompt
// ‘1 стіл’ - те що ми вивели в console.log

// 2
// ‘2  столи’

// 3
// ‘3  столи’

// 4
// ‘4  столи’

// 5
// ‘5  столів’

// 22
// ‘22  столи’

const isNum = prompt("Введіть натуральне число, більше ніж нуль");
if (isNum >= 0) {
    if (isNum != 11 && (isNum === 1 || isNum % 10 === 1)) {
        console.log(isNum + " стіл");
    } else if ((isNum >= 2 && isNum <= 4) || (isNum % 10 >= 2 && isNum % 10 <= 4 && isNum != 12 && isNum != 13 && isNum != 14)) {
        console.log(isNum + " столи");
    } else console.log(isNum + " столів");
} else alert("Введіть натуральне число, більше ніж нуль ");