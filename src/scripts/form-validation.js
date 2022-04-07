const data = document.querySelectorAll('#Form-form input');
const error = document.querySelectorAll('#Form-form small');
const form = document.querySelector('#Form-form');

form.addEventListener('submit', (e) => {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].value === '') {
      e.preventDefault();
      data[i].classList.add('error');
      error[i].textContent = 'Fill this field first';
      break;
    }
    if (data[i].value !== '') {
      data[i].classList.remove('error');
      error[i].textContent = '';
    }
  }

  if (data[2].value.toLowerCase() !== data[2].value) {
    e.preventDefault();
    data[2].classList.add('error');
    error[2].textContent = 'LOWERCASE ONLY';
    e.preventDefault();
    e.preventDefault();
    e.preventDefault();
  }
});
