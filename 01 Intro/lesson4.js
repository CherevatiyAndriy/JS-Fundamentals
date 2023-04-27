// Завдання 1

function sumSliceArray(arr, first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    throw new Error('Both arguments should be integers');
  }
  if (first >= arr.length || second >= arr.length) {
    throw new Error('Both arguments should be less than the length of the array');
  }
  if (first < 0 || second < 0) {
    throw new Error('Both arguments should be non-negative');
  }
  return arr[first] + arr[second];
}
var arr = [1, 2, 3, 4, 5];
try {
  var result = sumSliceArray(arr, 2, '3');
  console.log(result);
} catch (exception) {
  console.error(exception.message);
}

// Завдання 2

function checkAge() {
  let name = prompt("What's your name?");
  let age = prompt("How old are you?");
  let status = prompt("What's your status (admin, moderator, user)?");
  try {
    if (!age) {
      throw new Error("The field is empty! Please enter your age");
    } else if (isNaN(age)) {
      throw new TypeError("Age should be a number");
    } else if (age < 18 || age > 70) {
      throw new RangeError("Age should be between 18 and 70");
    } else if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError("Invalid status");
    } else {
      console.log(`Welcome, ${name}! You can watch the movie.`);
    }
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
}
window.addEventListener("load", function() {
  checkAge();
});

// Завдання 3

function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Both parameters must be numbers.');
    }
    return width * height;
  }
  try {
    const width = '5';
    const height = 10;
    const area = calcRectangleArea(width, height);
    console.log('Rectangle area:', area);
  } catch (exception) {
    console.error('Error:', exception.message);
  }


// Завдання 4

class MonthException {
    constructor(message) {
      this.name = "MonthException";
      this.message = message;
    }
  } 
  function showMonthName(month) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (month < 1 || month > 12) {
      throw new MonthException("Incorrect month number");
    }
    return months[month - 1];
  }
  try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
  } catch (exception) {
    if (exception instanceof MonthException) {
      console.log(exception.name, exception.message);
    } else {
      throw exception;
    }
  }

  // Завдання 5

  function showUser(id) {
    if (id < 0) {
      throw new Error('ID must not be negative: ' + id);
    }
    return { id: id };
  }
  function showUsers(ids) {
    var result = [];
    for (var i = 0; i < ids.length; i++) {
      try {
        result.push(showUser(ids[i]));
      } catch (exception) {
        console.error(exception.message);
      }
    }
    return result;
  }var users = showUsers([7, -12, 44, 22]);
  console.log(users);  