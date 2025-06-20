let todoList = [];

window.onload = () => {
  const storedTasks = localStorage.getItem("todos");
  if (storedTasks) {
    todoList = JSON.parse(storedTasks);
    renderList();
  }
};

function addTask() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();

  if (task !== "") {
    todoList.push(task);
    localStorage.setItem("todos", JSON.stringify(todoList));
    input.value = "";
    renderList();
  }
}

function renderList() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todoList.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <span onclick="removeTask(${index})">&times;</span>`;
    list.appendChild(li);
  });
}

function removeTask(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todoList));
  renderList();
}
