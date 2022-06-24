let taskList = [];

window.addEventListener("load", () => {
  taskList = readAllStore(() => new ListElement());
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject(deleteTaskItem));
  }
});
