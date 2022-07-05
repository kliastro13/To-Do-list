class ListElement {
  constructor(id, date, value) {
    this.id = id;
    this.date = date;
    this.value = value;
  }

  inject(editTaskItem, deleteTaskItem) {
    const taskListId = "task-list";
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", this.id);
    const strMaxLength = 80;

    tableRow.innerHTML = `<td>${this.id}</td>`;
    if (this.value.length > strMaxLength) {
      const shortValue = this.value.substring(0, strMaxLength) + "...";
      tableRow.innerHTML += `<td title="${this.value}" class="text-start" id="${this.id}-value">${shortValue}</td>`;
    } else {
      tableRow.innerHTML += `<td class="text-start" id="${this.id}-value">${this.value}</td>`;
    }
    tableRow.innerHTML += `<td>${this.date}</td>`;
    tableRow.innerHTML += `<td class="text-danger d-flex justify-content-evenly">
                            <button class="btn btn-outline-danger btn-sm func-btn" id="${this.id}-edit-btn">
                              <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger btn-sm func-btn" id="${this.id}-del-btn">
                              <i class="bi bi-trash"></i>
                            </button>
                           </td>`;


    document.getElementById(taskListId).appendChild(tableRow);

    const editBtn = document.getElementById(`${this.id}-edit-btn`);
    editBtn.addEventListener("click", () => editTaskItem(this));

    const deleteBtn = document.getElementById(`${this.id}-del-btn`);
    deleteBtn.addEventListener("click", () => deleteTaskItem(this));
  }

  delete() {
    document.getElementById(this.id).remove();
  }
}

export { ListElement };
