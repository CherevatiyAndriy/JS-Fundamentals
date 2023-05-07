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

