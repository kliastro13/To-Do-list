function getElNumber(id) {
  const elementPosition = 1;
  return document.getElementById(id).childElementCount + elementPosition;
}

function getCurrDate() {
  const monthFormat = 1; //month numbering starts from zero
  const today = new Date();
  let dateMonth = today.getMonth() + monthFormat;

  //to achieve output format "16.06.2022"
  if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }
  return `${today.getDate()}.${dateMonth}.${today.getFullYear()}`;
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function validate(value) {
  if (!value) {
    alert("You must write something!");
    return false;
  } else {
    return true;
  }
}

function delElement(id) {
  document.getElementById(id).parentElement.parentElement.remove();
}

/* function injectSavedElements(readAllStore, taskList, eventHandler) {
  taskList = readAllStore();
  if (taskList.length > 0) {
    taskList.forEach((element) => element.inject(eventHandler, taskList));
  }
} */
