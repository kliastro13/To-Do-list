class ListElement {
  constructor(id, date, value, listId, inputId) {
    this.id = id; //will get value from function getElNumber
    this.date = date; //will get value from function getCurrDate
    this.value = value; //will get value from function getinputValue
    this.elementDel = `<i class="bi bi-x-octagon" id="${id}">`;
    this.listId = listId;
    this.inputId = inputId;
  }

  inject() {
    const tableRow = document.createElement("tr");
    //tableRow.setAttribute("id", this.number);
    tableRow.innerHTML = `<th scope="row">${this.id}</th><td>${this.date}</td><td>${this.value}</td><td>${this.elementDel}</td>`;
    document.getElementById(this.listId).appendChild(tableRow);
    document.getElementById(this.inputId).value = "";
  }
}

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

function delElement(number) {
  console.log("something");
  document.getElementById(number).parentElement.parentElement.remove();
}
