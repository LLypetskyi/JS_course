// Перевірка на пароль

// Користувача в prompt питають пароль, і якщо цей пароль невірний - викинути повідомлення ‘хибний пароль’
// Вірний пароль буде ‘787898

const num = prompt("Please enter password - ");
if (num === '787898') {
  console.log("Your password is right");
} else console.log("Wrong password");

// OR

num === '787898' ? console.log("Your password is right") : console.log("Wrong password");

