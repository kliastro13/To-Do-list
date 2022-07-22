import { taskItemMaxVisibleLength } from "./config";
import { buildActionsBtnHtml } from "./htmlBuilders";

class ListElement {
  constructor(id, date, value, completed = false) {
    this.id = id;
    this.date = date;
    this.value = value;
    this.completed = completed;
  }

  inject(crossOutTackItem, editTaskItem, deleteTaskItem) {
    const taskListId = "task-list";
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", this.id);
    tableRow.innerHTML = `<td>${this.id}</td>`;
    tableRow.innerHTML += `<td>                             
                              <input class="form-check-input" type="checkbox" value="" id="${this.id}-check-mark">                            
                           </td>`;
    tableRow.innerHTML += `<td title="${this.value}" class="text-start" id="${
      this.id
    }-value">${this.getShortValue()}</td>`;
    tableRow.innerHTML += `<td class="created">${this.date}</td>`;
    tableRow.innerHTML += `<td class="text-danger d-flex justify-content-evenly">${buildActionsBtnHtml(
      this.id
    )}</td>`;
    document.getElementById(taskListId).appendChild(tableRow);

    if (this.completed === true) {
      tableRow.setAttribute("class", "text-decoration-line-through");
      document
        .getElementById(`${this.id}-check-mark`)
        .setAttribute("checked", "");
    }

    const checkMark = document.getElementById(`${this.id}-check-mark`);
    checkMark.addEventListener("change", () => crossOutTackItem(this));

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

  getShortValue() {
    let shortValue = this.value;
    if (this.value.length > taskItemMaxVisibleLength) {
      shortValue = this.value.substring(0, taskItemMaxVisibleLength) + "...";
    }
    return shortValue;
  }
}

export { ListElement };
