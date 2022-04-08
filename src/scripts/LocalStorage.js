const form = document.forms.contact;
const Name = form.elements[0];
const LastName = form.elements.Last_Name;
const Email = form.elements.email;
const Message = form.elements.message;

form.addEventListener('input', (e) => {
  const formInput = {
    name: Name.value,
    lastName: LastName.value,
    email: Email.value,
    message: Message.value,
  };
  formInput[e.target.id] = form.elements[e.target.id].value;
  localStorage.setItem('Data', JSON.stringify(formInput));
});

function RetriveData() {
  if (localStorage.getItem('Data')) {
    const inputValue = JSON.parse(localStorage.getItem('Data'));
    Name.value = inputValue.name;
    LastName.value = inputValue.lastName;
    Email.value = inputValue.email;
    Message.value = inputValue.message;
  }
}

RetriveData();
