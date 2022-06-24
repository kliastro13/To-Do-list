class ListElement {
  constructor(id, date, value, listId, inputId) {
    this.id = id;
    this.date = date;
    this.value = value;
    this.elementDel = `<i class="bi bi-x-octagon" id="${id}-del-btn">`;
    this.listId = listId;
    this.inputId = inputId;
  }

  inject(eventHandler, taskList) {
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", this.id);
    tableRow.innerHTML = `<th scope="row">${this.id}</th><td>${this.date}</td>`;
    tableRow.innerHTML += `<td>${this.value}</td><td>${this.elementDel}</td>`;
    document.getElementById(this.listId).appendChild(tableRow);
    document.getElementById(this.inputId).value = "";

    const delBtn = document.getElementById(`${this.id}-del-btn`);
    const deteleTaskItem = (event) => {
      eventHandler(event, this, taskList, deteleTaskItem);
    };
    delBtn.addEventListener("click", deteleTaskItem);
  }

  delete() {
    document.getElementById(this.id).remove();
  }
}
