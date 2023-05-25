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

// Перевірка, чи введена професія відповідає списку професій
function validateProfession(profession) {
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

// Обробка події надсилання форми
document.getElementById('registration-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значення професії
  const profession = document.getElementById('profession').value;

 // Перевірка, чи введена професія відповідає списку професій
function validateProfession(profession) {
  return professions.some((p) => p.toLowerCase() === profession.toLowerCase());
}

if (!validateProfession(profession)) {
  showError(); // Показати повідомлення про помилку
  return;
}

  // Створення об'єкта користувача
  const user = new User(surname, firstName, age, education, desiredPosition);

  try {
    const online = await checkNetworkStatus(); // Перевірка статусу мережі

    if (online) {
      await sendUserDataToServer(user); // Відправка даних на сервер
    } else {
      saveUserDataLocally(user); // Збереження даних локально
    }

    renderUserData(user); // Рендеринг даних користувача
    hideError(); // Сховати повідомлення про помилку
    document.getElementById('registration-form').reset(); // Скинути форму
  } catch (error) {
    console.error(error);
    showError(); // Показати повідомлення про помилку
  }
});

// Видалення даних користувачів з LocalStorage при оновленні сторінки
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('users');
});

// Ініціалізація
updateNetworkStatus(navigator.onLine);
loadUserDataFromLocalStorage();