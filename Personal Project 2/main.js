class User {
  constructor(surname, firstName, age, education, contact, desiredPosition) {
    this.surname = surname;
    this.firstName = firstName;
    this.age = age;
    this.education = education;
    this.contact = contact;
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
    const online = navigator.onLine;
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
    <p><strong>Контактні дані:</strong> ${user.contact}</p>
    <p><strong>Бажана професія:</strong> ${user.desiredPosition}</p>
    <hr>
  `;
  document.body.appendChild(userDataElement);
}

function showError() {
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.textContent = 'Помилка при відправці даних';
    errorElement.style.display = 'block';
  }
}

function hideError() {
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
}

function updateDesiredPosition(selectElement) {
  const desiredPositionInput = document.getElementById('desiredPosition');
  desiredPositionInput.value = selectElement.value;
}

function validateProfession(desiredPosition) {
  const validProfessions = [
    'Лікар',
    'Вчитель',
    'Інженер',
    'Актор',
    'Програміст',
    'Дизайнер',
    'Повар',
    'Бармен',
    'Адміністратор',
    'Викладач англійської мови',
    'Економіст',
    'Юрист',
    'Музикант',
    'Пекар',
    'Продавець-консультант'
  ];
  return validProfessions.includes(desiredPosition);
}

document.addEventListener('DOMContentLoaded', () => {
  loadUserDataFromLocalStorage();
});

window.addEventListener('beforeunload', () => {
  const surname = document.getElementById('surname').value;
  const firstName = document.getElementById('firstName').value;
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  const contact = document.getElementById('contact').value;
  const desiredPosition = document.getElementById('desiredPosition').value;

  const user = new User(surname, firstName, age, education, contact, desiredPosition);
  saveUserDataLocally(user);
});

window.addEventListener('online', () => {
  updateNetworkStatus(true);
});

window.addEventListener('offline', () => {
  updateNetworkStatus(false);
});

document.getElementById('registration-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const surname = document.getElementById('surname').value;
  const firstName = document.getElementById('firstName').value;
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  const contact = document.getElementById('contact').value;
  const desiredPosition = document.getElementById('desiredPosition').value;

  if (age < 18) {
    alert('Вибачте, ви не можете завершити реєстрацію, так як ви не досягли повноліття.');
    return;
  }

  if (!validateProfession(desiredPosition)) {
    const professionSelect = document.getElementById('profession');
    professionSelect.disabled = false;
    professionSelect.required = true;
    professionSelect.focus();

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Бажана професія відсутня, оберіть професію зі списку!';
    errorMessage.style.display = 'block';

    return;
  }

  const user = new User(surname, firstName, age, education, contact, desiredPosition);
  try {
    const online = await checkNetworkStatus();

    if (online) {
      await sendUserDataToServer(user);
    } else {
      saveUserDataLocally(user);
    }

    renderUserData(user);
    hideError();
    document.getElementById('registration-form').reset();
    document.getElementById('profession').disabled = true;
  } catch (error) {
    console.error(error);
    showError();
  }
});

updateNetworkStatus(navigator.onLine);
loadUserDataFromLocalStorage();