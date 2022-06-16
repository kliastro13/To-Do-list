function addNewElement() {
  const element = new ListElement(
    getElNumber(),
    getCurrDate(),
    getinputValue()
  );

  element.validate();
}

//function addNewElement() {}
/* function newElement() {
  const tableRow = document.createElement("tr");
  const inputValue = document.getElementById("task-input").value;

  tableRow.innerHTML = `<th scope="row">1</th><td>13.06.22</td><td>${inputValue}</td><td><img src="img/x-octagon.svg" /></td>`;

  if (!inputValue) {
    alert("You must write something!");
  } else {
    document.getElementById("task-list").appendChild(tableRow);
  }
  document.getElementById("task-input").value = "";
} */
