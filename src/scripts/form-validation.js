const emailEl = document.querySelector('#email');
const userName = document.querySelector('#Name');
const userLastName = document.querySelector('#Last_Name');
const message = document.querySelector('#message');
const form = document.querySelector('#Form-form');

const isEmailValid = (email) => {
  const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return re.test(email);
};

const isNameValid = (name) => {
  const re = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  return re.test(name);
};

const isRequired = (str) => {
  let res = true;
  if (str === '') {
    res = false;
  }
  return res;
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  const error = formField.querySelector('small');
  error.textContent = '';
};

const checkName = () => {
  let valid = false;
  const name = userName.value.trim();
  if (!isRequired(name)) {
    showError(userName, 'Name cannot be blank');
  } else if (!isNameValid(name)) {
    showError(userName, 'Name should srtart from capital letter');
  } else {
    showSuccess(userName);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let valid = false;
  const name = userLastName.value.trim();
  if (!isRequired(name)) {
    showError(userLastName, 'Name cannot be blank');
  } else if (!isNameValid(name)) {
    showError(userLastName, 'Name should srtart from capital letter');
  } else {
    showSuccess(userLastName);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkMessage = () => {
  let valid = false;
  const msg = message.value.trim();
  if (!isRequired(msg)) {
    showError(message, 'Please, in order to contact me leave a message');
  } else {
    showSuccess(message);
    valid = true;
  }
  return valid;
};

form.addEventListener('submit', (e) => {
  const isEmailValid = checkEmail();
  const isNameValid = checkName();
  const isLastValid = checkLastName();
  const isMessageValid = checkMessage();

  const isFormValid = isEmailValid && isNameValid
  && isLastValid && isMessageValid;

  if (!isFormValid) {
    e.preventDefault();
  }
});
