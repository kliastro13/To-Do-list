function eventHandler(event, element, taskList, deteleTaskItem) {
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
    ].elementDel = `<i class="bi bi-x-octagon" id="${taskList[i].id}-del-btn">`;
    taskList[i].inject(eventHandler, taskList);
    saveOrUpdateToStore(taskList[i]);
  }

  taskList.pop();
}
