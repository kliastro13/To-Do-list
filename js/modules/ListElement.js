class ListElement {
  constructor(id, date, value, listId, inputId) {
    this.id = id;
    this.date = date;
    this.value = value;
    this.elementDel = `<i class="bi bi-x-octagon" id="${id}">`;
    this.listId = listId;
    this.inputId = inputId;
  }

  inject() {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<th scope="row">${this.id}</th><td>${this.date}</td>`;
    tableRow.innerHTML += `<td>${this.value}</td><td>${this.elementDel}</td>`;
    document.getElementById(this.listId).appendChild(tableRow);
    document.getElementById(this.inputId).value = "";
  }
}
