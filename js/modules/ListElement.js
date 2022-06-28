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
    const strMaxLength = 80;
    if (this.value.length > strMaxLength) {
      const shortValue = this.value.substring(0, strMaxLength) + "...";
      tableRow.innerHTML = `<th scope="row" class="text-black-50">${this.id}</th><td>${this.date}</td>`;
      tableRow.innerHTML += `<td title="${this.value}">${shortValue}</td>`;
      tableRow.innerHTML += `<td class="delete-btn-container text-danger"><i class="bi bi-trash delete-btn" id="${this.id}-del-btn"></td>`;
    } else {
      tableRow.innerHTML = `<th scope="row" class="text-black-50">${this.id}</th><td>${this.date}</td>`;
      tableRow.innerHTML += `<td>${this.value}</td>`;
      tableRow.innerHTML += `<td class="delete-btn-container text-danger"><i class="bi bi-trash delete-btn" id="${this.id}-del-btn"></td>`;
    }
    document.getElementById(taskListId).appendChild(tableRow);

    const deleteBtn = document.getElementById(`${this.id}-del-btn`);
    deleteBtn.addEventListener("click", () => deleteTaskHandler(this));
  }

  delete() {
    document.getElementById(this.id).remove();
  }
}
