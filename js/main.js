const taskInputId = "task-input";
const taskListId = "task-list";
const taskList = [];
function addNewElement() {
  const inputValue = document.getElementById(taskInputId).value;
  if (!validate(inputValue)) {
    return;
  }
  const element = new ListElement(
    getElNumber(taskListId),
    getCurrDate(),
    getInputValue(taskInputId),
    taskListId,
    taskInputId
  );

  //for (index)
  //delete all element from the table
  //add all elem to the table
  element.inject();

  const td = document.getElementById(element.id);
  console.log(td);
  td.addEventListener("click", function () {
    delElement(element.id);
    //del element from the array
    //for (index)
    //delete all element from the table
    //add all elem to the table
  });
}
