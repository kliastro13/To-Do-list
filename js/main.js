const taskInputId = "task-input";
const taskListId = "task-list";
let taskList = [];

window.addEventListener("load", (event) => {
  taskList = readAllStore();
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject());
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

  console.log(taskList);
  element.inject();

  const delBtn = document.getElementById(element.id);
  const deteleTaskItem = function (event) {
    //delElement(element.id); //4-id 3-index in array
    event.target.removeEventListener("click", deteleTaskItem);
    deleteFromStore(element.id);
    for (let i = element.id - 1; i < taskList.length; i++) {
      //start from 3 index in array
      delElement(taskList[i].id);
    }

    for (let i = element.id - 1; i < taskList.length - 1; i++) {
      //start from 3 index in array
      taskList[i] = taskList[i + 1];
      taskList[i].id--;
      taskList[
        i
      ].elementDel = `<i class="bi bi-x-octagon" id="${taskList[i].id}">`;
      taskList[i].inject();
      document
        .getElementById(taskList[i].id)
        .addEventListener("click", deteleTaskItem);
    }

    taskList.pop();
    console.log(taskList);
  };

  delBtn.addEventListener("click", deteleTaskItem);
}
