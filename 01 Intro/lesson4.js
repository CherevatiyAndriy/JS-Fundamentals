// Завдання 1


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
  } catch (e) {
    console.error('Error:', e.message);
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
    if (e instanceof MonthException) {
      console.log(exception.name, exception.message);
    } else {
      throw exception;
    }
  }

  // Завдання 5

