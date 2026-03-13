const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

class FormValidation {
  constructor(form) {
    this.form = form;
  }

  showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
  }
  clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = "";
  }
  validateName(input) {
    if (input.value.trim() === "") {
      this.showError(input, "Name is required");
      return false;
    }

    this.clearError(input);
    return true;
  }

  validateEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input.value.trim())) {
      this.showError(input, "Invalid email format");
      return false;
    }
    this.clearError(input);
    return true;
  }

  validatePassword(input) {
    if (input.value.length < 6) {
      this.showError(input, "Password must be at least 6 characters");
      return false;
    }
    this.clearError(input);
    return true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const validator = new FormValidation(form);
  const isNameValid = validator.validateName(nameInput);
  const isEmailValid = validator.validateEmail(emailInput);
  const isPasswordValid = validator.validatePassword(passwordInput);

  if (isNameValid && isEmailValid && isPasswordValid) {
    // Form is valid, you can submit it here
    alert("Form submitted successfully!");
  }
});
