function saveOrUpdateToStore(listElement) {
  if (localStorage.getItem(listElement.id)) {
    localStorage[listElement.id] = JSON.stringify(listElement);
  }
  localStorage.setItem(listElement.id, JSON.stringify(listElement));
}

function deleteFromStore(id) {
  if (localStorage.getItem(id)) {
    localStorage.removeItem(id);
  }
}

function readAllStore(getType) {
  const keys = Object.keys(localStorage);
  const dataArray = [];

  keys.forEach((key) => {
    try {
      dataArray.push(
        Object.assign(getType(), JSON.parse(localStorage.getItem(key)))
      );
    } catch (err) {
      console.error(`Error while reading from Local Storage: ${err.message}`);
    }
  });

  dataArray.sort(
    (element1, element2) => parseFloat(element1.id) - parseFloat(element2.id)
  );
  return dataArray;
}

export { saveOrUpdateToStore, deleteFromStore, readAllStore };
