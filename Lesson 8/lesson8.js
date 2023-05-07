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