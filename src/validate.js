const email = document.getElementById('mail');
const password = document.getElementById('pw');
const passwordConfirm = document.getElementById('pw-confirm');
const birthDate = document.getElementById('birth-date');
const form = document.getElementById('register-form');
const captcha = document.querySelector('.g-recaptcha');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});


const validateInputs = () => {
    //Email Validation
    const mailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi);
    if(email.value === "") {
        showError(email, "*E-Mail Address is required");
    }
    else if(!mailRegEx.test(email.value)) {
        showError(email, "*Provide a valid e-mail address");
    }
    else {
        showSuccess(email);
    }

    //Password Validation
    let pwLength = password.value.length;
    let pwConfirmLength = passwordConfirm.value.length;
    if(password.value === "") {
        showError(password, "*Password is required");
    }
    else if(password.value !== "" && (pwLength < 8 || pwLength > 16)) {
        showError(password, "*Password must be between 8-16 characters");
    }
    else {
        showSuccess(password);
    }
    //Confirm Password Validation
    if(password.value !== passwordConfirm.value) {
        showError(passwordConfirm, "*Passwords do not match");
    }
    else {
        showSuccess(passwordConfirm)
    }

    //Date Validation
    // let currDate = new Date();
    // let currDay = currDate.getDate();
    // let currMonth = currDate.getMonth());
    // let currYear = currDate.getFullYear();
    // let currDateStr = `${currYear}-${currMonth}-${currDay}`;
    // if(birthDate.value >= currDateStr) {
    //     showError(birthDate, "*Provide a valid date");
    // }
    // else {
    //     showSuccess(birthDate);
    // }

    //Captcha validation
    let response = grecaptcha.getResponse();
    if(response === "" ) {
        showError(captcha, "*Captcha Required");
    }
    else {
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