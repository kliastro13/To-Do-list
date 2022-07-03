import { addTaskItem, init } from "./modules/eventHandlers";

window.addTaskItem = addTaskItem;
window.addEventListener("load", init);
