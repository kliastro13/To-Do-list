function eventHandler(element, taskList) {
  deleteFromStore(element.id);
  for (let i = element.id - 1; i < taskList.length; i++) {
    taskList[i].delete();
    deleteFromStore(taskList[i].id);
  }

  for (let i = element.id - 1; i < taskList.length - 1; i++) {
    taskList[i] = taskList[i + 1];
    taskList[i].id--;
    taskList[
      i
    ].elementDel = `<i class="bi bi-trash" id="${taskList[i].id}-del-btn">`;
    taskList[i].inject(eventHandler, taskList);
    saveOrUpdateToStore(taskList[i]);
  }
  taskList.pop();
}

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
