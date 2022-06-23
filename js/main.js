const taskInputId = "task-input";
const taskListId = "task-list";
let taskList = [];
//injectSavedElements(readAllStore, taskList, eventHandler);
window.addEventListener("load", (event) => {
  taskList = readAllStore();
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject(eventHandler, taskList));
  }
});

function addNewElement() {
  const inputValue = document.getElementById(taskInputId).value;
  if (!validate(inputValue)) {
    return;
  }

  const element = new ListElement(
    getElNumber(taskListId),
    getCurrDate(),
    getInputValue(taskInputId),
    taskListId,
    taskInputId
  );

  taskList.push(element);
  saveOrUpdateToStore(element);
  element.inject(eventHandler, taskList);

  /*   const delBtn = document.getElementById(element.id);
  const deteleTaskItem = function (event) {
    eventHandler(event, element, taskList, deteleTaskItem);
  };
  delBtn.addEventListener("click", deteleTaskItem); */
}
