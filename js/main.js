import { addTaskItem, init } from "./modules/eventHandlers";

const taskItemMaxLength = 20;

window.addTaskItem = addTaskItem;
window.addEventListener("load", init);

export { taskItemMaxLength };
