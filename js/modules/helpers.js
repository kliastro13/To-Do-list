function getCurrDate() {
  const monthFormat = 1;
  const today = new Date();
  let dateMonth = today.getMonth() + monthFormat;

  if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }
  return `${today.getDate()}.${dateMonth}.${today.getFullYear()}`;
}

function validate(value) {
  if (!value) {
    return false;
  }
  return true;
}
