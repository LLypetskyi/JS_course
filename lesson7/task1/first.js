// // let
// let Some_number = 10;
// console.log(
//   "This is some variable of number type-",
//   Some_number,
//   typeof Some_number
// )

// let Some_string = "Lorem ipsum dolor sit amet.";
// console.log(
//   "This is some variable of string type-",
//   Some_string,
//   typeof Some_string
// )

// let Some_boolean = true;
// console.log(
//   "This is some variable of boolean type-",
//   Some_boolean,
//   typeof Some_boolean
// )

// let Some_null = null;
// console.log("This is some Null value-", Some_null, typeof Some_null);

// let Some_undefined;
// console.log(
//   "This is some variable of undefined type-",
//   Some_undefined,
//   typeof Some_undefined
// )

// let Some_object = {};
// console.log(
//   "This is some variable of object type-",
//   Some_object,
//   typeof Some_object
// )

// let id = Symbol();
// console.log(
//   'This is some symbol with "function type" -',
//   Symbol,
//   typeof Symbol
// )

// let Big_integer = 2n;
// console.log(
//   "This is some variable of bigint type-",
//   Big_integer,
//   typeof Big_integer
// )

// // ______________________________________________________________________________
// // var
// var Some_number = 10;
// console.log(
//   "This is some variable of number type-",
//   Some_number,
//   typeof Some_number
// )

// var Some_string = "Lorem ipsum dolor sit amet.";
// console.log(
//   "This is some variable of string type-",
//   Some_string,
//   typeof Some_string
// )
// var Some_boolean = true;
// console.log(
//   "This is some variable of boolean type-",
//   Some_boolean,
//   typeof Some_boolean
// )

// var Some_null = null;
// console.log("This is some Null value-", Some_null, typeof Some_null);

// var Some_undefined;
// console.log(
//   "This is some variable of undefined type-",
//   Some_undefined,
//   typeof Some_undefined
// )

// var Some_object = {};
// console.log(
//   "This is some variable of object type-",
//   Some_object,
//   typeof Some_object
// )

// var id = Symbol();
// console.log(
//   'This is some symbol with "function type" -',
//   Symbol,
//   typeof Symbol
// )

// var Big_integer = 2n;
// console.log(
//   "This is some variable of bigint type-",
//   Big_integer,
//   typeof Big_integer
// )

// // ______________________________________________________________________________
// // const

// const Some_number = 10;
// console.log(
//   "This is some variable of number type-",
//   Some_number,
//   typeof Some_number
// )

// const Some_string = "Lorem ipsum dolor sit amet.";
// console.log(
//   "This is some variable of string type-",
//   Some_string,
//   typeof Some_string
// )

// const Some_boolean = true;
// console.log(
//   "This is some variable of boolean type-",
//   Some_boolean,
//   typeof Some_boolean
// )

// const Some_null = null;
// console.log("This is some Null value-", Some_null, typeof Some_null);

// // const - undefined doesnt aviable to init

// const Some_object = {};
// console.log(
//   "This is some variable of object type-",
//   Some_object,
//   typeof Some_object
// )

// const id = Symbol();
// console.log(
//   'This is some symbol with "function type" -',
//   Symbol,
//   typeof Symbol
// )

// const Big_integer = 2n;
// console.log(
//   "This is some variable of bigint type-",
//   Big_integer,
//   typeof Big_integer
// )

// ______________________________________________________________________________
// 5 examples of conversion number -> string
// let a = 1,
//   b = 100,
//   c = 3000,
//   d = 5000,
//   e = 4n;

// console.log("5 examples of conversion number -> string");
// console.log(a.toString());
// console.log(b.toString());
// console.log(c.toString());
// console.log(d.toString());
// console.log(e.toString());

// ______________________________________________________________________________
// 5 examples of conversion string  -> number
// let a = '122'
//   b = '124',
//   c = '2',
//   d = '5000',
//   e = '41';
// console.log("5 examples of conversion string  -> number");
// console.log(Number(a));
// console.log(Number(b));
// console.log(Number(c));
// console.log(Number(d));
// console.log(Number(e));

// ______________________________________________________________________________
// Вивести в консоль результат перечислених нище виразів і пояснення, чому цей вираз має відповідний результат.
//  console.log(1 + ‘2’);   Uncaught SyntaxError: Invalid or unexpected token
                        // ‘2’ - не правильний запис, синтаксична помилка.  
                        // Якщоб було  1+'2' в результаті конкатенації ми б отримали стрінгу- 12

// console.log( ' ' + 1 + 0);  
// в результаті конкатенації ми б отримали стрінгу- "порожнє місце"10

// console.log(' '- 1 + 0); 
// в результаті конкатенації ми б отримали стрінгу- "порожнє місце" -1. Знак "мінус" рахується як символ
 //console.log ((' '2' * '3'));  
 // first.js:197 Uncaught SyntaxError: Unexpected number - ми не можемо переммножувати стрінги

// console.log ((' 2 + 2 + 'px'));  
// Uncaught SyntaxError: Unexpected identifier
// до двох чисел ми додажм стрінгу

//  console.log ('px' + 2 + 1);  
 // результат - px21 - отримали стірнгу в результаті конкатенації

//  console.log ('2' - 1);
 // отримали результат - 1. Перша стрінга була переведена до типу number. Далі було виконано дію віднімання 2-1=1
 
// console.log ('2px' - 1); 
// отримали результат - NaN. Оскільки не вдалося перевести стрінгу '2px' до типу number, то і математичну дію виконати неможливо

// console.log( Null + 1); 
// отримали результат - Uncaught ReferenceError: Null is not defined at first.js:212 
// До чогось не визначеного дії провести неможемо

// console.log(Undefined + 1  )
// // отримали результат - Uncaught ReferenceError: Undefined is not defined at first.js:215 
// До чогось не ініціалізованого дії провести неможемо

