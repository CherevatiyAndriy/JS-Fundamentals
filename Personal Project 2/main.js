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
      const success = Math.random() < 0.7; // 70% шанс успіху

      if (success) {
        console.log('Дані користувача успішно відправлено на сервер');
        resolve();
      } else {
        console.error('Помилка при відправці даних на сервер');
        reject(new Error('Помилка при відправці даних на сервер'));
      }
    }, 1000);
  });
}

// Оновлення статусу мережі
function updateNetworkStatus(online) {
  const statusElement = document.getElementById('network-status');
  if (statusElement) {
    statusElement.textContent = 'Статус мережі: ' + (online ? 'Онлайн' : 'Офлайн');
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
    <p><strong>Бажана професія:</strong> ${user.desiredPosition}</p>
    <hr>
  `;
  document.body.appendChild(userDataElement);
}

// Показати повідомлення про помилку
function showError() {
  const errorElement = document.getElementById('profession-error');
  if (errorElement) {
    errorElement.style.display = 'block';
  }
}

// Сховати повідомлення про помилку
function hideError() {
  const errorElement = document.getElementById('profession-error');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
}

// Оголошення масиву професій
const professions = [
  "Лікар",
  "Вчитель",
  "Інженер",
  "Актор",
  "Програміст",
  "Дизайнер",
  "Повар",
  "Бармен",
  "Адміністратор",
  "Викладач англійської мови",
  "Економіст",
  "Юрист",
  "Музикант",
  "Пекар",
  "Продавець-консультант"
];

// Перевірка, чи введена професія відповідає списку професій
function validateProfession(profession) {
  return professions.includes(profession.trim());
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

document.getElementById('registration-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Зупинка стандартної поведінки форми
  document.getElementById('register-btn').addEventListener('click', async () => {
    // Отримання значень з форми
    const surname = document.getElementById('surname').value;
    const firstName = document.getElementById('firstName').value;
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;
    const desiredPosition = document.getElementById('desiredPosition').value;
    const professionSelect = document.getElementById('profession');
    const profession = professionSelect.value || desiredPosition; // Використовувати значення зі списку професій, якщо воно доступне
  
    if (!validateProfession(profession)) {
      professionSelect.disabled = false; // Розблокувати список професій
      professionSelect.required = true; // Встановити обов'язковість вибору професії
      professionSelect.focus(); // Перевести фокус на поле вибору професії
  
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Бажана професія відсутня, оберіть професію зі списку!';
      errorMessage.style.display = 'block'; // Показати повідомлення про помилку
  
      return;
    }
  
    // Створення об'єкта користувача
    const user = new User(surname, firstName, age, education, profession);
  
    try {
      const online = await checkNetworkStatus(); // Перевірка статусу мережі
  
      if (online) {
        await sendUserDataToServer(user); // Відправка даних на сервер
      } else {
        saveUserDataLocally(user); // Збереження даних локально
      }
  
      renderUserData(user); // Рендеринг даних користувача
      hideError();
  
      // Виконати додаткові дії для завершення реєстрації, наприклад, відображення підтвердження або перехід на іншу сторінку
      alert('Реєстрацію завершено!');
    } catch (error) {
      // Обробка помилки під час відправки даних
      console.error('Помилка під час реєстрації:', error);
    }
  });
// Видалення даних користувачів з LocalStorage при оновленні сторінки
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('users');
});

// Ініціалізація
updateNetworkStatus(navigator.onLine);
loadUserDataFromLocalStorage();