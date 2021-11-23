const inputEmail = document.querySelector('input[type=email]');
const inputMessage = document.querySelector('textarea[name=message]');
const form = document.querySelector('.feedback-form');
const button = document.querySelector('button[type=submit]');

var throttle = require('lodash.throttle');

form.addEventListener('input', throttle(handleSubmit, 500));
form.addEventListener('input', formValue);

const formData = {};

function handleSubmit() {

    formData.email = inputEmail.value;
    formData.message = inputMessage.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

    console.log(`E-mail: ${inputEmail.value}, Message: ${inputMessage.value}`);
};

function formValue() {
    const feedbackFormState = localStorage.getItem('feedback-form-state');

    if (!feedbackFormState) return;

    const currentFormState = JSON.parse(feedbackFormState);

    inputEmail.value = currentFormState.email;
    inputMessage.value = currentFormState.message;
};

formValue();

function formSubmit(e) {
    e.preventDefault();
    localStorage.removeItem('feedback-form-state'); form.reset();
    console.log(formData);
};

form.addEventListener('submit', formSubmit);