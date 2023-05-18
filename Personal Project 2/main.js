class User {
    constructor(surname, firstName, age, education, desiredPosition) {
      this.surname = surname;
      this.firstName = firstName;
      this.age = age;
      this.education = education;
      this.desiredPosition = desiredPosition;
    }
  }
  
  function saveUserDataLocally(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function sendUserDataToServer(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.5;
  
        if (success) {
          console.log('Дані користувача успішно відправлено на сервер');
          resolve();
        } else {
          console.error('Помилка при відправці даних на сервер');
          reject();
        }
      }, 1000);
    });
  }
  
  function updateNetworkStatus(online) {
    const statusElement = document.getElementById('network-status');
    if (statusElement) {
      statusElement.textContent = online ? 'Онлайн' : 'Офлайн';
    }
  }
  
  function checkNetworkStatus() {
    return new Promise((resolve) => {
      const online = Math.random() < 0.8;
      resolve(online);
    });
  }
  
  function loadUserDataFromLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user) => {
      renderUserData(user);
    });
  }
  
  function renderUserData(user) {
    const userDataElement = document.createElement('div');
    userDataElement.innerHTML = `
      <p><strong>Прізвище:</strong> ${user.surname}</p>
      <p><strong>Ім'я:</strong> ${user.firstName}</p>
      <p><strong>Вік:</strong> ${user.age}</p>
      <p><strong>Освіта:</strong> ${user.education}</p>
      <p><strong>Бажана посада:</strong> ${user.desiredPosition}</p>
      <hr>
    `;
    document.body.appendChild(userDataElement);
  }
  
  window.addEventListener('online', () => {
    updateNetworkStatus(true);
    loadUserDataFromLocalStorage();
  });
  
  window.addEventListener('offline', () => {
    updateNetworkStatus(false);
  });
  
  document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const surname = document.getElementById('surname').value;
    const firstName = document.getElementById('firstName').value;
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;
    const desiredPosition = document.getElementById('desiredPosition').value;
  
    const availableProfessions = ['Лікар', 'Вчитель', 'Інженер', 'Актор', 'Програміст', 'Дизайнер'];
  
    if (!availableProfessions.includes(desiredPosition)) {
      const professionError = document.getElementById('profession-error');
      professionError.textContent = 'Бажана посада повинна бути однією з професій';
      professionError.style.display = 'block';
      return;
    }
  
    const user = new User(surname, firstName, age, education, desiredPosition);
  
    checkNetworkStatus()
      .then((online) => {
        if (online) {
          return sendUserDataToServer(user);
        } else {
          saveUserDataLocally(user);
          throw new Error('Користувача збережено локально. Перевірте підключення до мережі для відправки на сервер.');
        }
      })
      .then(() => {
        renderUserData(user);
  
        document.getElementById('surname').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('education').value = '';
        document.getElementById('desiredPosition').value = '';
        const professionError = document.getElementById('profession-error');
        professionError.style.display = 'none';
      })
      .catch((error) => {
        console.error(error);
      });
  });
  
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('users');
  });
  
  loadUserDataFromLocalStorage();
  updateNetworkStatus(navigator.onLine);