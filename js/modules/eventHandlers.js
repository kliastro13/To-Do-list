import { taskItemMaxVisibleLength } from "./config";
import {
  saveOrUpdateToStore,
  deleteFromStore,
  readAllStore,
} from "./persistence";
import { ListElement } from "./ListElement";
import { validate, getCurrDate, showPlaceholder } from "./helpers";
import { buildTaskItemHtml } from "./htmlBuilders";

function crossOutTackItem(element) {
  const tableRow = document.getElementById(element.id);
  if (document.getElementById(`${element.id}-check-mark`).checked) {
    tableRow.setAttribute("class", "text-decoration-line-through");
    element.done = true;
  } else {
    tableRow.setAttribute("class", "");
    element.done = false;
  }
  saveOrUpdateToStore(element);
}

function editTaskItem(element) {
  const taskTd = document.getElementById(`${element.id}-value`);
  taskTd.innerHTML = buildTaskItemHtml(element.id, element.value);

  const taskItemValueShortener = () => {
    if (element.value.length > taskItemMaxVisibleLength) {
      const shortValue =
        element.value.substring(0, taskItemMaxVisibleLength) + "...";
      taskTd.setAttribute("title", element.value);
      taskTd.innerHTML = shortValue;
    } else {
      taskTd.innerHTML = element.value;
    }
  };

  const cancelBtn = document.getElementById(`${element.id}-cancel-btn`);
  cancelBtn.addEventListener("click", taskItemValueShortener);

  const saveBtn = document.getElementById(`${element.id}-save-btn`);
  saveBtn.addEventListener("click", () => {
    const editValue = document.getElementById(`${element.id}-edit-input`).value;
    if (!validate(editValue)) {
      alert("Task item should contain at least 1 char and 200 chars max!");
      return;
    }
    element.value = editValue;
    saveOrUpdateToStore(element);
    taskItemValueShortener();
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
    taskList[i].inject(crossOutTackItem, editTaskItem, deleteTaskItem);
    saveOrUpdateToStore(taskList[i]);
  }
  taskList.pop();
  showPlaceholder(taskList);
}

function addTaskItem() {
  const taskInputId = "task-input";
  const inputValue = document.getElementById(taskInputId).value;
  if (!validate(inputValue)) {
    alert("Task item should contain at least 1 char and 200 chars max!");
    return;
  }
  const element = new ListElement(
    taskList.length + 1,
    getCurrDate(),
    inputValue
  );

  taskList.push(element);
  saveOrUpdateToStore(element);
  element.inject(crossOutTackItem, editTaskItem, deleteTaskItem);
  document.getElementById(taskInputId).value = "";
  showPlaceholder(taskList);
}

let taskList = [];
function init() {
  taskList = readAllStore(() => new ListElement());
  if (taskList.length > 0) {
    taskList.forEach((element) =>
      element.inject(crossOutTackItem, editTaskItem, deleteTaskItem)
    );
  }
  showPlaceholder(taskList);
}

export { addTaskItem, init };
