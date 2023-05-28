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
      const success = Math.random() < 0.7;

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

function updateNetworkStatus(online) {
  const statusElement = document.getElementById('network-status');
  if (statusElement) {
    statusElement.textContent = 'Статус мережі: ' + (online ? 'Онлайн' : 'Офлайн');
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
    <p><strong>Бажана професія:</strong> ${user.desiredPosition}</p>
    <hr>
  `;
  document.body.appendChild(userDataElement);
}

function showError() {
  const errorElement = document.getElementById('profession-error');
  if (errorElement) {
    errorElement.style.display = 'block';
  }
}

function hideError() {
  const errorElement = document.getElementById('profession-error');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
}

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

function validateProfession(profession) {
  return professions.includes(profession.trim());
}

window.addEventListener('online', () => {
  updateNetworkStatus(true);
  loadUserDataFromLocalStorage();
});

window.addEventListener('offline', () => {
  updateNetworkStatus(false);
});

document.getElementById('registration-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значень з форми
  const surname = document.getElementById('surname').value;
  const firstName = document.getElementById('firstName').value;
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  const desiredPosition = document.getElementById('desiredPosition').value;

  if (!validateProfession(desiredPosition)) {
    const professionSelect = document.getElementById('profession');
    professionSelect.disabled = false; // Розблокувати список професій
    professionSelect.required = true; // Встановити обов'язковість вибору професії
    professionSelect.focus(); // Перевести фокус на поле вибору професії

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Бажана професія відсутня, оберіть професію зі списку!';
    errorMessage.style.display = 'block'; // Показати повідомлення про помилку

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

const registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', () => {
  document.getElementById('registration-form').submit();
});
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('users');
});

updateNetworkStatus(navigator.onLine);
loadUserDataFromLocalStorage();