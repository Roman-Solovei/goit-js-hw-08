const inputEmail = document.querySelector('input[type=email]');
const inputMessage = document.querySelector('textarea[name=message]');
const form = document.querySelector('.feedback-form');

const button = document.querySelector('button[type=submit]');

var throttle = require('lodash.throttle');

form.addEventListener('input', throttle(handleSubmit, 500));
form.addEventListener('input', formValue());

function handleSubmit() {  

    const formData = {
        email: inputEmail.value,
        message: inputMessage.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    console.log(`E-mail: ${inputEmail.value}, Message: ${inputMessage.value}`);
}

function formValue() {
const feedbackFormState = localStorage.getItem('feedback-form-state');    
const currentFormState = JSON.parse(feedbackFormState);
    
inputEmail.value = currentFormState.email;    
inputMessage.value = currentFormState.message;    
};

function formSubmit() {    
    localStorage.removeItem('feedback-form-state');
    form.reset();
    console.log('qwe')
}

form.addEventListener('submit', formSubmit);