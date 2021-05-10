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
const id = new Date().getTime();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const data = getUserInput();
  console.log(myJSON);
  form.reset();
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
