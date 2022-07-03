import {
  saveOrUpdateToStore,
  deleteFromStore,
  readAllStore,
} from "./persistence";
import { ListElement } from "./ListElement";
import { validate, getCurrDate } from "./helpers";

function deleteTaskItem(element) {
  deleteFromStore(element.id);
  for (let i = element.id - 1; i < taskList.length; i++) {
    taskList[i].delete();
    deleteFromStore(taskList[i].id);
  }

  for (let i = element.id - 1; i < taskList.length - 1; i++) {
    taskList[i] = taskList[i + 1];
    taskList[i].id--;
    taskList[i].inject(deleteTaskItem);
    saveOrUpdateToStore(taskList[i]);
  }
  taskList.pop();
}

function addTaskItem() {
  const taskInputId = "task-input";
  const inputValue = document.getElementById(taskInputId).value;
  if (!validate(inputValue)) {
    alert("You must write something!");
    return;
  }
  const element = new ListElement(
    taskList.length + 1,
    getCurrDate(),
    inputValue
  );

  taskList.push(element);
  saveOrUpdateToStore(element);
  element.inject(deleteTaskItem);
  document.getElementById(taskInputId).value = "";
}

let taskList = [];
function init() {
  taskList = readAllStore(() => new ListElement());
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject(deleteTaskItem));
  }
}
export { addTaskItem, init };
