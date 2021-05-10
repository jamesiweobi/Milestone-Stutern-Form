const myJSON = [
  {
    id: 1236329372890,
    firstName: 'Jeff',
    surname: 'Bezos',
    age: 46,
    userClass: '300L',
    club: 'Arts and Craft',
  },
  {
    id: 1236329122890,
    firstName: 'Nonso',
    surname: 'Ngwo',
    age: 26,
    userClass: '100L',
    club: 'Computer Science',
  },
  {
    id: 5136329122890,
    firstName: 'Chizzy',
    surname: 'Samson',
    age: 66,
    userClass: '500L',
    club: 'Business Admin',
  },
  {
    id: 5136329129090,
    firstName: 'Tobechukwu',
    surname: 'Iweobi',
    age: 32,
    userClass: '300L',
    club: 'Business Admin',
  },
  {
    id: 7836329129090,
    firstName: 'Kelvin',
    surname: 'Adams',
    age: 22,
    userClass: '400L',
    club: 'Computer Science',
  },
];

const form = document.querySelector('#form');
const submit = document.querySelector('.btn-submit');
const alert = document.querySelector('.alert');
const tableBody = document.querySelector('#table .tbody');
const table = document.querySelector('#table');
let alertMessage = '';
const id = new Date().getTime();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const data = getUserInput();
  loadTable(data);
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteRow(deleteBtns);
});

const getUserInput = () => {
  const firstName = document.querySelector('#first-name').value;
  const surname = document.querySelector('#surname').value;
  const age = parseInt(document.querySelector('#age').value);
  const userClass = document.querySelector('#class').value;
  const club = document.querySelector('#club').value;
  let user = {};
  user.id = id;
  user.firstName = firstName;
  user.surname = surname;
  user.age = age;
  user.userClass = userClass;
  user.club = club;
  return user;
};
const nanFormat = (nan) => {
  if (nan === NaN) return 0;
  else return nan;
};
const loadTable = (data) => {
  if (data.firstName === '' || data.surname === '' || data.age < 1) {
    alertMessage = "You can't submit an empty form";
    let alertColor = 'danger';
    alertFunc(alertMessage, alertColor);
  } else {
    alertMessage = 'You successfully added user info';
    let alertColor = 'success';
    alertFunc(alertMessage, alertColor);
    table.classList.add('show-table');
    const tableContent = `
                <td>${data.id}</td>
                <td>${data.firstName}</td>
                <td>${data.surname}</td>
                <td>${nanFormat(data.age)}</td>
                <td>${data.userClass}</td>
                <td>${data.club}</td>
                <td>
                  <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
    `;
    tableBody.insertAdjacentHTML('beforeend', tableContent);
    form.reset();
  }
};

const deleteRow = (buttons) => {
  buttons.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
      const toDelete = e.currentTarget.parentElement.parentElement;
      alertMessage = 'Deleted User Info';
      let alertColor = 'success';
      alertFunc(alertMessage, alertColor);
      toDelete.remove();
    });
  });
  // if (buttons.length < 2) table.classList.remove('show-table');
};

const alertFunc = (message, messageType) => {
  alert.textContent = message;
  alert.classList.add(`alert-${messageType}`);
  setInterval(() => {
    alert.classList.remove(`alert-${messageType}`);
  }, 5000);
};
