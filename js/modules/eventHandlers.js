import {
  saveOrUpdateToStore,
  deleteFromStore,
  readAllStore,
} from "./persistence";
import { ListElement } from "./ListElement";
import { validate, getCurrDate } from "./helpers";

function editTaskItem(element) {
  const taskTd = document.getElementById(`${element.id}-value`);
  taskTd.innerHTML = `<div class="input-group input-group-sm">
                      <input type="text" class="col-8 form-control" value="${element.value}" id="${element.id}-edit-input">
                      <button type="button" class="btn btn-danger text-light" id="${element.id}-save-btn">SAVE</button>
                      <button type="button" class="btn btn-danger text-light" id="${element.id}-cancel-btn">CANCEL</button></div>`;
  const cancelBtn = document.getElementById(`${element.id}-cancel-btn`);
  cancelBtn.addEventListener("click", () => {
    const strMaxLength = 80;
    if (element.value.length > strMaxLength) {
      const shortValue = element.value.substring(0, strMaxLength) + "...";
      taskTd.setAttribute("title", element.value);
      taskTd.innerHTML = shortValue;
    } else {
      taskTd.innerHTML = element.value;
    }
  });

  const saveBtn = document.getElementById(`${element.id}-save-btn`);
  saveBtn.addEventListener("click", () => {
    const editValue = document.getElementById(`${element.id}-edit-input`).value;
    if (!validate(editValue)) {
      alert("You must write something!");
      return;
    }
    element.value = editValue;
    saveOrUpdateToStore(element);
    const strMaxLength = 80;
    if (element.value.length > strMaxLength) {
      const shortValue = element.value.substring(0, strMaxLength) + "...";
      taskTd.setAttribute("title", element.value);
      taskTd.innerHTML = shortValue;
    } else {
      taskTd.innerHTML = element.value;
    }
  });
}

function deleteTaskItem(element) {
  deleteFromStore(element.id);
  for (let i = element.id - 1; i < taskList.length; i++) {
    taskList[i].delete();
    deleteFromStore(taskList[i].id);
  }

  for (let i = element.id - 1; i < taskList.length - 1; i++) {
    taskList[i] = taskList[i + 1];
    taskList[i].id--;
    taskList[i].inject(editTaskItem, deleteTaskItem);
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
  element.inject(editTaskItem, deleteTaskItem);
  document.getElementById(taskInputId).value = "";
}

let taskList = [];
function init() {
  taskList = readAllStore(() => new ListElement());
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject(editTaskItem, deleteTaskItem));
  }
}
export { addTaskItem, init };
