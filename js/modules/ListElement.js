class ListElement {
  constructor(id, date, value) {
    this.id = id;
    this.date = date;
    this.value = value;
  }

  inject(deleteTaskHandler) {
    const taskListId = "task-list";
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", this.id);
    tableRow.innerHTML = `<th scope="row">${this.id}</th><td>${this.date}</td>`;
    tableRow.innerHTML += `<td>${this.value}</td>`;
    tableRow.innerHTML += `<td class="del-btn"><i class="bi bi-trash" id="${this.id}-del-btn"></td>`;
    document.getElementById(taskListId).appendChild(tableRow);

    const deleteBtn = document.getElementById(`${this.id}-del-btn`);
    deleteBtn.addEventListener("click", () => deleteTaskHandler(this));
  }

  delete() {
    document.getElementById(this.id).remove();
  }
}
