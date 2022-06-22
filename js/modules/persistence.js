function saveOrUpdateToStore(listElement) {
  if (sessionStorage.getItem(listElement.id)) {
    sessionStorage[listElement.id] = JSON.stringify(listElement);
  }
  sessionStorage.setItem(listElement.id, JSON.stringify(listElement));
}

function deleteFromStore(id) {
  if (sessionStorage.getItem(id)) {
    sessionStorage.removeItem(id);
  }
}

function readAllStore() {
  const keys = Object.keys(sessionStorage);
  const dataArray = [];
  keys.forEach((key) =>
    dataArray.push(
      Object.assign(new ListElement(), JSON.parse(sessionStorage.getItem(key)))
    )
  );
  dataArray.sort(
    (element1, element2) => parseFloat(element1.id) - parseFloat(element2.id)
  );
  return dataArray;
}
