import { taskItemMaxVisibleLength } from "./config";
import { buildActionsBtnHtml } from "./htmlBuilders";

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
    tableRow.innerHTML = `<td>${this.id}</td>`;
    if (this.value.length > taskItemMaxVisibleLength) {
      const shortValue =
        this.value.substring(0, taskItemMaxVisibleLength) + "...";
      tableRow.innerHTML += `<td title="${this.value}" class="text-start" id="${this.id}-value">${shortValue}</td>`;
    } else {
      tableRow.innerHTML += `<td class="text-start" id="${this.id}-value">${this.value}</td>`;
    }
    tableRow.innerHTML += `<td class="created">${this.date}</td>`;
    tableRow.innerHTML += `<td class="text-danger d-flex justify-content-evenly">${buildActionsBtnHtml(
      this.id
    )}</td>`;
    document.getElementById(taskListId).appendChild(tableRow);

    const editBtn = document.getElementById(`${this.id}-edit-btn`);
    editBtn.addEventListener("click", () => editTaskItem(this));

    const deleteBtn = document.getElementById(`${this.id}-del-btn`);
    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete the task item?") == true)
        deleteTaskItem(this);
    });
  }

  delete() {
    document.getElementById(this.id).remove();
  }
}

export { ListElement };
