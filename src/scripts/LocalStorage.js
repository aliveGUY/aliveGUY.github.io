const Name = document.querySelector('#Name');
const LastName = document.querySelector('#Last_Name');
const Email = document.querySelector('#email');
const Message = document.querySelector('#message');


function InsertData() {
    var formInput = {
        name: Name.value,
        lastName: LastName.value,
        email: Email.value,
        message: Message.value,
    }
    localStorage.setItem('Data', JSON.stringify(formInput))
}

const ss = JSON.parse(localStorage.getItem('Data'));

console.log(ss.lastName)


function RetriveData() {
    if (localStorage.getItem('Data')) {
        const inputValue = JSON.parse(localStorage.getItem('Data'));
        Name.value = inputValue.name;
        LastName.value = inputValue.lastName;
        Email.value = inputValue.email;
        Message.value = inputValue.message;
        
    }
}

window.onload = RetriveData();