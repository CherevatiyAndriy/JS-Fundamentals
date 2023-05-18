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

// Оновлення статусу мережі при завантаженні сторінки
window.addEventListener('load', async () => {
  const online = await checkNetworkStatus();
  updateNetworkStatus(online);

  if (online) {
    loadUserDataFromLocalStorage();
  }
});

// Обробник подання форми реєстрації
document.getElementById('registration-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const surname = document.getElementById('surname').value;
  const firstName = document.getElementById('firstName').value;
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  const desiredPosition = document.getElementById('desiredPosition').value;

  // Перевірка, чи обрана посада відповідає обраній професії
  const professionSelect = document.getElementById('profession');
  const selectedProfession = professionSelect.options[professionSelect.selectedIndex].value;
  if (desiredPosition !== selectedProfession) {
    const professionError = document.getElementById('profession-error');
    professionError.style.display = 'block';
    return;
  }

  const user = new User(surname, firstName, age, education, desiredPosition);

  try {
    if (navigator.onLine) {
      await sendUserDataToServer(user);
    } else {
      saveUserDataLocally(user);
    }

    renderUserData(user);

    // Очищення полів форми
    document.getElementById('surname').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('education').value = '';
    document.getElementById('desiredPosition').value = '';
  } catch (error) {
    console.error(error);
  }
});
  
  // Видалення даних користувачів з LocalStorage при оновленні сторінки
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('users');
  });
  
  // Ініціалізація
loadUserDataFromLocalStorage();
updateNetworkStatus(navigator.onLine);