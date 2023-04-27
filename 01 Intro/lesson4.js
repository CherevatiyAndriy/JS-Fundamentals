// Завдання 1



// Завдання 2

function checkAge() {
  try {
    const name = prompt('Please enter your name:');
    const age = Number(prompt('Please enter your age:'));
    const status = prompt('Please enter your status (admin, moderator, user):');
    if (age < 18 || age > 70) {
      throw new RangeError('Age must be between 18 and 70');
    }
    if (!name || !age || !status) {
      throw new Error('The field is empty! Please enter your age');
    }
    if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
      throw new EvalError('Invalid status');
    }
    if (isNaN(age)) {
      throw new TypeError('Age must be a number');
    }
    alert('You have access to watch the movie.');
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}

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

