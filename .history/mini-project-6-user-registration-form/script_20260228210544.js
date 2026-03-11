const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nameInput.value === "") {
    alert("Name is required");
  }
  if (emailInput.value === "") {
    alert("Email is required");
  }
  if (passwordInput.value === "") {
    alert("Password is required");
  }
});

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("karthick", 25);
console.log(p1);
