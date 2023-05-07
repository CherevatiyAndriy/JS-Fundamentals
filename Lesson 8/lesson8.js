// Завдання 1
function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
    return "String's starts with uppercase character";
    } else {
    return "String's not starts with uppercase character";
    }
  }
console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));

// Завдання 2
function checkEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
console.log(checkEmail("Qmail2@gmail.com"));

// Завдання 3
const str = "Java Script";
const regex = /^(\w+)\s+(\w+)$/;
const replaced = str.replace(regex, "$2, $1");
console.log(replaced);

// Завдання 4
function validateCardNumber(cardNumber) {
    const regex = /^(\d{4}-){3}\d{4}$/;
    return regex.test(cardNumber);
  }
  const cardNumber = "9999-9999-9999-9999";
  console.log(validateCardNumber(cardNumber));

  // Завдання 5
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9]+([_\-\.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-\.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
    return "Email is correct!";
    } else {
    return "Email is not correct!";
    }
  }
  console.log(validateEmail('my_mail@gmail.com'));
  console.log(validateEmail('#my_mail@gmail.com')); 
  console.log(validateEmail('my_ma--il@gmail.com'));

  // Завдання 6
  function checkLogin(login) {
    const regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    if (regex.test(login)) {
    const numbers = login.match(/\d+(\.\d+)?/g);
    return [true, numbers];
    } else {
    return false;
    }
  }
  console.log(checkLogin('ee1.1ret3'));
  console.log(checkLogin('ee1*1ret3'));