// Клас користувача
class User {
    constructor(surname, firstName, age, education, desiredPosition) {
      this.surname = surname;
      this.firstName = firstName;
      this.age = age;
      this.education = education;
      this.desiredPosition = desiredPosition;
    }
  }
  
  // Збереження даних користувача в локальному сховищі (LocalStorage)
  function saveUserDataLocally(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  // Відправка даних користувача на сервер (симуляція запиту API)
  function sendUserDataToServer(user) {
    return new Promise((resolve, reject) => {
      // Симуляція асинхронного запиту на сервер
      setTimeout(() => {
        const success = Math.random() < 0.5; // 50% шанс успіху
  
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
  
  // Оновлення статусу мережі
  function updateNetworkStatus(online) {
    const statusElement = document.getElementById('network-status');
    if (statusElement) {
      statusElement.textContent = online ? 'Онлайн' : 'Офлайн';
    }
  }
  
  // Перевірка доступу до мережі
  function checkNetworkStatus() {
    return new Promise((resolve) => {
      // Симуляція перевірки статусу мережі
      const online = Math.random() < 0.8; // 80% шанс бути онлайн
      resolve(online);
    });
  }
  
  // Завантаження даних з LocalStorage
  function loadUserDataFromLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user) => {
      renderUserData(user);
    });
  }
  
  // Рендеринг даних користувача на сторінці
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
  
  // Оновлення статусу мережі при зміні
  window.addEventListener('online', () => {
    updateNetworkStatus(true);
    loadUserDataFromLocalStorage();
  });
  
  // Оновлення статусу мережі при зміні
  window.addEventListener('offline', () => {
    updateNetworkStatus(false);
  });
  
  // Обробка події надсилання форми
  document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Зупинка стандартної поведінки форми
  
    const surname = document.getElementById('surname').value;
    const firstName = document.getElementById('firstName').value;
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;
    const desiredPosition = document.getElementById('desiredPosition').value;
  
    // Перевірка, чи обрана професія є у списку доступних
    const professionSelect = document.getElementById('profession');
    const selectedProfession = professionSelect.value;
  
    const availableProfessions = ['Лікар', 'Вчитель', 'Інженер', 'Актор', 'Програміст', 'Дизайнер'];
  
    if (!availableProfessions.includes(selectedProfession)) {
      // Перевірка, чи користувач ввів свою професію
      if (selectedProfession.trim() !== '') {
        // Додавання користувачевої професії до списку доступних
        availableProfessions.push(selectedProfession);
      } else {
        // Показ повідомлення про необхідність ввести професію
        const professionError = document.getElementById('profession-error');
        professionError.textContent = 'Введіть вашу професію';
        professionError.style.display = 'block';
        return; // Припинити виконання функції
      }
    }
  
    // Якщо обрана професія є у списку доступних, продовжити обробку форми
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
        // Рендеринг даних користувача на сторінці
        renderUserData(user);
  
        // Очищення полів форми
        document.getElementById('surname').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('education').value = '';
        document.getElementById('desiredPosition').value = '';
        professionSelect.value = '';
        const professionError = document.getElementById('profession-error');
        professionError.style.display = 'none';
        window.addEventListener('beforeunload', () => {
        localStorage.removeItem('users');
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });
  
  // Ініціалізація
  loadUserDataFromLocalStorage();
  updateNetworkStatus(navigator.onLine);