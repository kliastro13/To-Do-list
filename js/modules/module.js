class ListElement {
  constructor(number, date, value) {
    this.number = number; //will get value from function getElNumber
    this.date = date; //will get value from function getCurrDate
    this.value = value; //will get value from function getinputValue
    this.elementDel = `<i class="bi bi-x-octagon" id="${number}">`;
  }

  inject() {
    const tableRow = document.createElement("tr");
    //tableRow.setAttribute("id", this.number);
    tableRow.innerHTML = `<th scope="row">${this.number}</th><td>${this.date}</td><td>${this.value}</td><td>${this.elementDel}</td>`;
    document.getElementById("task-list").appendChild(tableRow);
    document.getElementById("task-input").value = "";
  }
}

function getElNumber() {
  const elementPosition = 1;
  let numb =
    document.getElementById("task-list").childElementCount + elementPosition;
  return numb;
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

function getinputValue() {
  const inputValue = document.getElementById("task-input").value;
  return inputValue;
}

function validate(value) {
  if (!value) {
    alert("You must write something!");
    return false;
  } else {
    return true;
  }
}

function delElement(number) {
  console.log("something");
  document.getElementById(number).parentElement.parentElement.remove();
}
