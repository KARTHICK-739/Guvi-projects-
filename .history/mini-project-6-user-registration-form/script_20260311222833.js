const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function FormValidation(form) {
  this.form = form;
}
FormValidation.prototype.showError = function (input, message) {

form.addEventListener("submit", function (e) {
  e.preventDefault();
}
