const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

class FormValidation(form) {
    constructor(form){
        this.form =form;
    }

    showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
    }
    clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = "";
    }
    validateName(input){
        if (input.value.trim() === "") {
            this.showError(input, "Name is required");
            return false;

        }

        this.clearError(input);
        
    }

}