class ListElement {
  constructor(number, date, value) {
    this.number = number; //will get value from function getElNumber
    this.date = date; //will get value from function getCurrDate
    this.value = value; //will get value from function getinputValue
    //this.elementDel = elementDel;
  }

  inject() {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<th scope="row">${this.number}</th><td>${this.date}</td><td>${this.value}</td><td><i class="bi bi-x-octagon"></i></td>`;
    document.getElementById("task-list").appendChild(tableRow);
    document.getElementById("task-input").value = "";
  }

  validate() {
    if (!this.value) {
      alert("You must write something!");
    } else {
      this.inject();
    }
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
