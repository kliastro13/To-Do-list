function addNewElement() {
  const inputValue = document.getElementById("task-input").value;
  if (!validate(inputValue)) {
    return;
  } else {
    const element = new ListElement(
      getElNumber(),
      getCurrDate(),
      getinputValue()
    );

    element.inject();
    const td = document.getElementById(element.number);
    console.log(td);
    td.addEventListener("click", function () {
      delElement(element.number);
    });
  }
}
