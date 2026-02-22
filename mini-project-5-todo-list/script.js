const input = document.getElementById("todoinput");
const addBtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");
let todos = [];

// Add event listener to the input field to allow adding todos by pressing Enter key
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Function to save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to render the todo list
function renderTodos() {
  todoList.innerHTML = "";
  // Loop through the todos array and create list items for each todo
  todos.forEach(function (todo, index) {
    const li = document.createElement("li");
    // Create a span to hold the task text and apply completed class if necessary
    const span = document.createElement("span");
    span.textContent = todo.text;
    // If the todo is marked as completed, add the "completed" class to the span
    if (todo.completed) {
      span.classList.add("completed");
    }
    // Append the span to the list item
    li.appendChild(span);
    // Add a click event listener to toggle the completed status of the todo
    li.addEventListener("click", function () {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    // Create a delete button for each todo item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    // Add a click event listener to the delete button to remove the todo item
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });
    //
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Event listener for adding a new todo
addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText === "") return;

  todos.push({
    text: taskText,
    completed: false,
  });

  saveTodos();
  renderTodos();
  input.value = "";
});

// Load todos from localStorage when the page loads
window.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("todos");

  if (saved) {
    todos = JSON.parse(saved);
  }

  renderTodos();
});

/* when add button is clicked, 
create a new  list item with the task text 
and add it to the todo list */
/* addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText === "") {
    return;
  }

  // Add the new task to the todos array
  todos.push({
    text: taskText,
    completed: false,
  });

  // Save the updated todos array to localStorage`
  localStorage.setItem("todos", JSON.stringify(todos));

  //creating li element
  const li = document.createElement("li");
  //creating span element to hold the task text
  const span = document.createElement("span");
  span.textContent = taskText;

  li.appendChild(span);
  li.addEventListener("click", function () {
    span.classList.toggle("completed");
  });
  //creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  input.value = "";
});
// Load todos from localStorage when the page loads
window.addEventListener("DOMContentLoaded", function () {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    console.log(todos);
  }
}); */
