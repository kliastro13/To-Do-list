const taskInputId = "task-input";
const taskListId = "task-list";
let taskList = [];

window.addEventListener("load", (event) => {
  taskList = readAllStore(() => new ListElement());
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject(eventHandler, taskList));
  }
});

function addNewElement() {
  const inputValue = document.getElementById(taskInputId).value;
  if (!validate(inputValue)) {
    return;
  }

  const nextId = document.getElementById(taskListId).childElementCount + 1;
  const element = new ListElement(
    nextId,
    getCurrDate(),
    inputValue,
    taskListId,
    taskInputId
  );

  taskList.push(element);
  saveOrUpdateToStore(element);
  element.inject(eventHandler, taskList);
}
