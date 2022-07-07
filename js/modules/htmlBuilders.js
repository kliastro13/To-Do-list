export function buildTaskItemHtml(id, value) {
  return `<div class="input-group input-group-sm">
    <input type="text" class="form-control" value="${value}" id="${id}-edit-input">
    <button type="button" class="btn btn-danger text-light ms-1" id="${id}-save-btn">
      Save
    </button>
    <button type="button" class="btn btn-danger text-light ms-1" id="${id}-cancel-btn">
      Cancel
    </button>
  </div>`;
}

export function buildActionsBtnHtml(id) {
  return `<button class="btn btn-outline-danger btn-sm" id="${id}-edit-btn">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-outline-danger btn-sm" id="${id}-del-btn">
            <i class="bi bi-trash"></i>
          </button>`;
}
