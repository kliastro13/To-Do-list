export function buildTaskItemHtml(element) {
  return `<div class="input-group input-group-sm">
    <input type="text" class="form-control" value="${element.value}" id="${element.id}-edit-input">
    <button type="button" class="btn btn-danger text-light ms-1" id="${element.id}-save-btn">
      Save
    </button>
    <button type="button" class="btn btn-danger text-light ms-1" id="${element.id}-cancel-btn">
      Cancel
    </button>
  </div>`;
}

export function buildBtn(id) {
  return `<button class="btn btn-outline-danger btn-sm" id="${id}-edit-btn">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-outline-danger btn-sm" id="${id}-del-btn">
            <i class="bi bi-trash"></i>
          </button>`;
}

{
  /* <button class="btn btn-outline-danger btn-sm" id="${this.id}-edit-btn">
<i class="bi bi-pencil"></i>
</button>
<button class="btn btn-outline-danger btn-sm" id="${this.id}-del-btn">
<i class="bi bi-trash"></i>
</button> */
}
