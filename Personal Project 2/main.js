// Перевірка наявності доступу до мережі
function checkNetworkStatus() {
    return navigator.onLine;
  }
  
  // Збереження даних користувача в локальному сховищі
  function saveUserDataLocally(userData) {
    const savedData = JSON.parse(localStorage.getItem('userData')) || [];
    savedData.push(userData);
    localStorage.setItem('userData', JSON.stringify(savedData));
  }
  
  // Отримання даних користувача з локального сховища
  function getUserDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('userData')) || [];
  }
  
  // Відправлення даних на сервер (емуляція)
  function sendUserDataToServer(userData) {
    // Емуляція відправки даних на сервер та отримання відповіді
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = { success: true };
        resolve(response);
      }, 1000);
    });
  }
  
  // Видалення даних з локального сховища
  function clearLocalStorage() {
    localStorage.removeItem('userData');
  }
  
  // Функція, яка витягує дані з локального сховища та публікує їх на сторінці
  function publishDataFromLocalStorage() {
    const userData = getUserDataFromLocalStorage();
    // Логіка для публікації даних на сторінці
  }
  
  // Функція обробки події зміни статусу мережі
  function handleNetworkStatusChange() {
    if (checkNetworkStatus()) {
      const userData = getUserDataFromLocalStorage();
  
      if (userData.length > 0) {
        sendUserDataToServer(userData)
          .then(response => {
            if (response.success) {
              clearLocalStorage();
            }
          })
          .catch(error => {
            console.log('Помилка під час відправки даних на сервер:', error);
          });
      }
    } else {
      publishDataFromLocalStorage();
    }
  }
  
  // Реєстрація Event Listener для зміни статусу мережі
  window.addEventListener('online', handleNetworkStatusChange);
  window.addEventListener('offline', handleNetworkStatusChange);
  
  // Логіка для форми реєстрації користувача
  const registrationForm = document.getElementById('registration-form');
  
  registrationForm.addEventListener('submit', event => {
    event.preventDefault();
  
    const userData = {
      surname: registrationForm.surname.value,
      firstName: registrationForm.firstName.value,
      age: registrationForm.age.value,
      education: registrationForm.education.value,
      desiredPosition: registrationForm.desiredPosition.value
    };
  
    if (checkNetworkStatus()) {
      sendUserDataToServer(userData)
        .then(response => {
          if (response.success) {
            // Додаткова логіка після успішного відправлення на сервер
          }
        })
        .catch(error => {
          console.log('Помилка під час відправки даних на сервер:', error);
          saveUserDataLocally(userData);
        });
    } else {
      saveUserDataLocally(userData);
    }
  
    // Очищення полів форми
    registrationForm.reset();
  });