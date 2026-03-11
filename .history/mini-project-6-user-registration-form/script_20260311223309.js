const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function FormValidation(form) {
  this.form = form;
}
FormValidation.prototype.showError = function (input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
}

FormValidation.prototype.clearError = function (input) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = "";
}

FormValidation.prototype.validateName = function (input) {
  if(input.value.trim() === "")
  {
    this.showError()
  }

form.addEventListener("submit", function (e) {
  e.preventDefault();
}
