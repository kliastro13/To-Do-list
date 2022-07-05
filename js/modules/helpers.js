function getCurrDate() {
  const monthFormat = 1;
  const today = new Date();

  let dateDay = today.getDate();
  if (dateDay < 10) {
    dateDay = "0" + dateDay;
  }

  let dateMonth = today.getMonth() + monthFormat;
  if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }

  return `${dateDay}.${dateMonth}.${today.getFullYear()}`;
}

function validate(value) {
  if (!value) {
    return false;
  }
  return true;
}

export { getCurrDate, validate };
