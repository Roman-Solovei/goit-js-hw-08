


// inputEmail.addEventListener('input', console.log(inputEmail.value));

// let inputMessage = document.querySelector('.feedback-form textarea[name=message]');
// console.log(inputMessage.value)

// const outName = () => {     
//     inputName.value === '' ? outputName.innerHTML = 'Anonymous' : outputName.innerHTML = inputName.value;    
// };

// inputName.addEventListener('input', outName);

const inputEmail = document.querySelector('input[type=email]');
const inputMessage = document.querySelector('textarea[name=message]');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleSubmit);

function handleSubmit() {
  
//   event.preventDefault();    

    const formData = {
        email: inputEmail.value,
        message: inputMessage.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

    console.log(`E-mail: ${inputEmail.value}, Message: ${inputMessage.value}`);    
}

// const submit = document.querySelector('button[type=submit]');
// console.log(submit)


//  function qqq() {

const aaa = localStorage.getItem('feedback-form-state');
console.log(aaa);    
     
const sss = JSON.parse(aaa);
console.log(sss.email);
 inputEmail.value = sss.email;
 inputMessage.value = sss.message;

// };


form.addEventListener('submit', qqq);


