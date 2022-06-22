function eventHandler(event, element, taskList, deteleTaskItem) {
  event.target.removeEventListener("click", deteleTaskItem);
  deleteFromStore(element.id);

  for (let i = element.id - 1; i < taskList.length; i++) {
    delElement(taskList[i].id);
  }

  for (let i = element.id - 1; i < taskList.length - 1; i++) {
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
}
