


// inputEmail.addEventListener('input', console.log(inputEmail.value));

// let inputMessage = document.querySelector('.feedback-form textarea[name=message]');
// console.log(inputMessage.value)

// const outName = () => {     
//     inputName.value === '' ? outputName.innerHTML = 'Anonymous' : outputName.innerHTML = inputName.value;    
// };

// inputName.addEventListener('input', outName);
const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleSubmit);

function handleSubmit(event) {
  
  event.preventDefault();
    
    const inputEmail = document.querySelector('input[type=email]');
    const inputMessage = document.querySelector('textarea[name=message]');

    const inputData = {
        email: inputEmail.value,
        message: inputMessage.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(inputData));

    console.log(`E-mail: ${inputEmail.value}, Message: ${inputMessage.value}`);    
}
