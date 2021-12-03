console.log(" ----------------------------------");

let user = {
  name: "Liubomyr",
  surname: "Lypetskyi",
  age: 34,
  sex: "male",
  married: true,
  children: true,
  inerObdj: {
    iner: "Yra",
    iner1: "Kolya",
    iner2: "Andrew",
    iner3: "Andrew1",
    inerObdj1: {
      iner11: "Yra1",
      iner12: "Kolya1",
      iner13: "Andrew1",
      iner14: "Andrew11",
    },
  },
  city: "Lviv",
  street: "Striyska",
  cityIndex: "79000",
  building: "204",
  room: 144,
  cellFone: "0978497686",
  mail: "liubomyr.lypetskyi@gmail.com",
  "driver's license": true,
  education: "Master of Economics",
};

function copyObject(object) {
  const rezObject = {};
  for (const key in object) {
    if (typeof object[key] !== "object") {
      rezObject[key] = object[key];
    } else {
      rezObject[key] = copyObject(object[key]);
    }
  }
  return rezObject;
}

console.log("this is the original object- user", user);
console.log(" ----------------------------------");
console.log("this is new clone of user- copyUser with a changed value of age");
console.log(copyObject(user));
console.log(" ----------------------------------");
