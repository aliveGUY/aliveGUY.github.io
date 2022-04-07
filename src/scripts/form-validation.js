const data = document.querySelectorAll('#Form-form input, textarea');
const error = document.querySelectorAll('#Form-form small');
const form = document.querySelector('#Form-form');

console.log(data)

form.addEventListener('submit', (e) => {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].value === '') {
      e.preventDefault();
      data[i].classList.add('error');
      error[i].textContent = `Fill ${data[i].getAttribute('placeholder')} field first`;
      error[4].textContent = `Fill ${data[i].getAttribute('placeholder')} field first`;
      break;
    }
    if (data[i].value !== '') {
      data[i].classList.remove('error');
      error[i].textContent = '';
      error[4].textContent = '';
    }
  }

  if (data[2].value.toLowerCase() !== data[2].value) {
    e.preventDefault();
    data[2].classList.add('error')
    error[2].textContent = 'Email cant contain upercase';
    error[4].textContent = 'Email cant contain upercase';
    e.preventDefault();
    e.preventDefault();
    e.preventDefault();
  } else {
    error[2].textContent = '';
    data[2].classList.remove('error');
  }
});
