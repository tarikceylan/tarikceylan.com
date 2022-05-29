const email = document.getElementById('mail');
const password = document.getElementById('pw');
const passwordConfirm = document.getElementById('pw-confirm');
const birthDate = document.getElementById('birth-date');
const captcha = document.querySelector('.g-recaptcha');

const form = document.getElementById('register-form');

let validMail = false,
    validPw = false,
    validPwConfirm = false,
    validBday = false,
    validCaptcha = false;

form.addEventListener('submit', e => {
    if(!validMail || !validPw || !validPwConfirm || !validBday || !validCaptcha) {
        validateInputs();
        e.preventDefault();
    }
});

form.addEventListener('change', () => {
    validateInputs();
});


const validateInputs = () => {
    //Email Validation
    const mailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi);
    if(email.value === "") {
        validMail = false;
        showError(email, "*E-Mail Address is required");
    }
    else if(!mailRegEx.test(email.value)) {
        validMail = false;
        showError(email, "*Provide a valid e-mail address");
    }
    else {
        validMail = true;
        showSuccess(email);
    }
    //Password Validation
    let pwLength = password.value.length;
    let pwConfirmLength = passwordConfirm.value.length;
    if(password.value === "") {
        validPw = false; 
        showError(password, "*Password is required");
      
    }
    else if(password.value !== "" && (pwLength < 8 || pwLength > 16)) {
        validPw = false;
        showError(password, "*Password must be between 8-16 characters");
    }
    else {
        validPw = true;
        showSuccess(password);
    }
    //Confirm Password Validation
    if(password.value !== passwordConfirm.value) {
        validPwConfirm = false;
        showError(passwordConfirm, "*Passwords do not match");
    }
    else {
        validPwConfirm = true;
        showSuccess(passwordConfirm)
    }
    //Date Validation
    let currDate = new Date();
    let currDay = currDate.getDate();
    let currMonth = `0${(currDate.getMonth() + 1).toString().slice(-2)}`;
    let currYear = currDate.getFullYear();
    let currDateStr = `${currYear}-${currMonth}-${currDay}`;
    if(birthDate.value > currDateStr || birthDate.value === "") {
        validBday = false;
        showError(birthDate, "*Provide a valid date");
    }
    else {
        validBday = true;  
        showSuccess(birthDate);
    }
    //Captcha validation
    let response = grecaptcha.getResponse();
    if(response === "" ) {
        validCaptcha = false;
        showError(captcha, "*Captcha Required");
    }
    else {
        validCaptcha = true;
        showSuccess(captcha);
    }
}

const showError = (el, msg) => {
    let inputField = el.parentElement;
    let errorText = inputField.querySelector(".error-msg");
    errorText.innerText = msg;
}

const showSuccess = (el) => {
    let inputField = el.parentElement;
    let errorText = inputField.querySelector(".error-msg");
    errorText.innerText = "";
}