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
            case 'email':
                elementError.textContent = "You need to enter an email address.";
                break;
            default:
                elementError.textContent = "Error!";
        }
    } else if(element.validity.typeMismatch) {
        switch(element.id) {
            case 'email':
                elementError.textContent = "Entered value needs to be an email address.";
                break;
            default:
                elementError.textContent = "Error!";
        }
    } else if(element.validity.tooShort) {
        switch(element.id) {
            case 'email':
                elementError.textContent = `Email should be at least ${element.minLength} characters; you entered ${element.value.length}.`;
                break;
            default:
                elementError.textContent = "Error!";
        }
    }
}