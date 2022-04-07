let data = document.querySelectorAll('#Form-form input, textarea');
const error = document.querySelectorAll('#Form-form small');
const form = document.querySelector('#Form-form');

let ei = 2;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  data[1].value = 'sent from mobile';
  data = document.querySelectorAll('#Name, #email, #message');
  ei = 1;
}

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

  if (data[ei].value.toLowerCase() !== data[ei].value) {
    e.preventDefault();
    data[ei].classList.add('error');
    error[ei].textContent = 'Email cant contain upercase';
    error[4].textContent = 'Email cant contain upercase';
    e.preventDefault();
    e.preventDefault();
    e.preventDefault();
  } else {
    error[ei].textContent = '';
    data[ei].classList.remove('error');
  }
});
