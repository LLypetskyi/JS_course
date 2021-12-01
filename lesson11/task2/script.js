// // Створіть функцію, яка додає 3 цифри і виводить результат в перемінну, в консоль, в алерт

console.log(" ----------------------------------");

let user = {
  name: "Liubomyr",
  surname: "Lypetskyi",
  age: 34,
  sex: "male",
  married: true,
  children: true,
  adress: {
    cityIndex: "79000",
    city: "Lviv",
    street: "Striyska",
    building: "204",
    room: 44,
  },
  cellFone: "0978497686",
  mail: "liubomyr.lypetskyi@gmail.com",
  "driver's license": true,
  education: "Master of Economics",
  showInfoAboutUser: function showInfoAboutUser() {
    console.log(this.name, this.surname, this.cellFone, this.mail);
  },
};

console.info(user);

user.showInfoAboutUser();

// let copyUser = {};
// // Створюєм функцію для копіювання одного ОБ'ЄКТА В ІНШИЙ
// let function createUserCopy(user, copyUser) {
//   for (let key in user) {

//   }
