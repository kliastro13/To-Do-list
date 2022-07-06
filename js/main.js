import { addTaskItem, init } from "./modules/eventHandlers";

const taskItemMaxLength = 100;

window.addTaskItem = addTaskItem;
window.addEventListener("load", init);

export { taskItemMaxLength };
