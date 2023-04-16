document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const taskInput = document.getElementById("task-input");
const submitButton = document.getElementById("submit-button");
const taskList = document.getElementById("task-items");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const task = taskInput.value;
  if (task !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = task;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});
