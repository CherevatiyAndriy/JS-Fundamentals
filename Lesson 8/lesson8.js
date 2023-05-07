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
    const regex = /^[a-zA-Z0-9]+([_\-.]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-.]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }

  // Завдання 6
