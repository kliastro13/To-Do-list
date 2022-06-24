const taskInputId = "task-input";
const taskListId = "task-list";
let taskList = [];

window.addEventListener("load", (event) => {
  taskList = readAllStore(() => new ListElement());
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject(eventHandler, taskList));
  }
});
