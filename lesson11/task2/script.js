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
    city: {
      cityName: "Lviv",
      cityStreet: "Striyska",
      cityIndex: "79000",
    },
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

let copyUser = {};

// Створюєм функцію для копіювання одного ОБ'ЄКТА В ІНШИЙ за допомогою циклу for (in)
function createUserCopy(user, copyUser) {
  for (let key in user) {
    copyUser.key = user.key;
    copyUser[key] = user[key];
    return copyUser;
  }
}

createUserCopy(user, copyUser);
copyUser.age = 47;
console.log("this is the original object- user", user);
console.log(" ----------------------------------");
console.log("this is new clone of user- copyUser", copyUser);
console.log("this is some info of original object- user");
user.showInfoAboutUser();
console.log(" ----------------------------------");
