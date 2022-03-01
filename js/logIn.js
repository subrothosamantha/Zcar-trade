const email = document.getElementById('inputEmail'),
         password = document.getElementById('inputPassword'),
             userName = document.getElementById('inputName'),
                submitButton = document.getElementById('submitButton');


onLoadMethod();

function onLoadMethod(){
    submitButton.disabled = true;
    submitButton.style.borderColor = "red";
    email.addEventListener('blur',logInValidation);
    password.addEventListener('blur',logInValidation);
    userName.addEventListener('blur',logInValidation);
}



function logInValidation(){
    let errors;

    validateLength(this); //here this means the variable which invocked this method

    if(this.type === 'email'){
        validateEmail(this);
    }
    errors = document.querySelectorAll('.error');
    if(email.value !== '' && password.value !== '' && userName.value !== ''){
        if(errors.length === 0){
            submitButton.disabled = false;
            submitButton.style.color = 'green';
            submitButton.style.fontWeight = "900";
        }
    }
    
}

function validateLength(field){
    if(field.value.length > 0){
        field.style.borderColor = "green";
        field.classList.remove('error');
    }else{
        field.style.borderColor = "red";
        field.classList.add('error');
    }
}


function validateEmail(email){
    if(email.value.indexOf('@') !== -1){
        email.style.borderColor = "green";
        email.classList.remove('error');
    }else{
         email.style.borderColor = "red";
         email.classList.add('error');
    }
}