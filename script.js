//email validation
//country validation
//zip code validation
//password validation
//password confirmation validation
//submit button function

const form = document.querySelector("form");
const email = documnt.getElementbyId("mail");
const emailError = document.querySelector('#mail + span.error');

email.addEventListener("input", (event) => {
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError(email, emailError);
    }
});

function showError(element, elementError) {
    if(element.validity.valueMissing) {
        elementError.textContent = ""
    }
}