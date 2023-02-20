//email validation
//country validation
//zip code validation
//password validation
//password confirmation validation
//submit button function

const form = document.querySelector("form");
const formElements = document.querySelectorAll(".form-control");

//Assign corresponding error spans to each input element and add validation function on input event
formElements.forEach(function(element){
    elementError = document.querySelector(`#${element.id} + span.error`);
    element.addEventListener("input", validateFormElement(element, elementError));
})

//general function to validate form element on input
function validateFormElement(element, elementError) {
    if(element.validity.valid){
        elementError.textContent = "";
        elementError.className = "error";
    } else {
        showError(element, elementError);
    }
} 

//function to display error message depending on type of error and form input
function showError(element, elementError) {
    if(element.validity.valueMissing) {
        switch(element.id) {
            case 'mail':
                elementError.textContent = "You need to enter an email address.";
                break;
            case 'zip':
                elementError.textContent = "You need to enter a zip code.";
                break;
            case 'password':
                elementError.textContent = "You need to enter a password.";
                break;
            default:
                elementError.textContent = "Error!";
        }
    } else if(element.validity.typeMismatch) {
        switch(element.id) {
            case 'mail':
                elementError.textContent = "Entered value needs to be an email address.";
                break;
            default:
                elementError.textContent = "Error!";
        }
    } else if(element.validity.tooShort) {
        switch(element.id) {
            case 'mail':
                elementError.textContent = `Email should be at least ${element.minLength} characters; you entered ${element.value.length}.`;
                break;
            case 'zip':
                elementError.textContent = `Zip code should be at least ${element.minLength} characters; you entered ${element.value.length}.`;
                break;
            case 'password':
                elementError.textContent = `Password should contain at least ${element.minLength} characters; you entered ${element.value.length}.`;
                break;
            default:
                elementError.textContent = "Error!";
        }
    } else if(element.validity.patternMismatch) {
        switch(element.id) {
            case 'zip':
                elementError.textContent = `Zip code should be 6 digits.`;
                break;
            case 'password':
                elementError.textContent = `Password should contain at least 1 number, 1 uppercase and 1 lowercase letter.`;
                break;
            default:
                elementError.textContent = "Error!";
        }
    } else if(element.id === 'confirm') {
        elementError.textContent = `Passwords do not match.`;
    }

    elementError.className = "error active";
}

function checkPassword(){
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    const confirmError = document.querySelector(`${confirm.id} + span.error`);
    if(confirm.value === password.value) {
        confirmError.textContent = "";
        confirmError.className = "error";
    } else {
        showError(confirm, confirmError);
    }
}