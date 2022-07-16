import { taskItemMaxLength } from "./config";
function getCurrDate() {
  const monthFormat = 1;
  const today = new Date();

  let dateDay = today.getDate();
  if (dateDay < 10) {
    dateDay = "0" + dateDay;
  }

  let dateMonth = today.getMonth() + monthFormat;
  if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }

  return `${dateDay}.${dateMonth}.${today.getFullYear()}`;
}

function validate(value) {
  if (!value || value.length > taskItemMaxLength) {
    return false;
  }
  return true;
}

function showPlaceholder(taskList) {
  const placeholder = document.getElementById("empty-list-div");
  if (taskList.length === 0) {
    placeholder.style.display = "block";
  } else {
    placeholder.style.display = "none";
  }
}

export { getCurrDate, validate, showPlaceholder };
