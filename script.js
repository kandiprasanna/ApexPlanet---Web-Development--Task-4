const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => renderTask(task));
};

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;
  renderTask(task);
  saveTask(task);
  taskInput.value = "";
}

function renderTask(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const del = document.createElement("span");
  del.textContent = "❌";
  del.className = "delete";
  del.onclick = () => {
    li.remove();
    removeTask(task);
  };

  li.appendChild(del);
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
