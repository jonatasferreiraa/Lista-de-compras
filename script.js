const newItem = document.getElementById("new-item");
const addItem = document.getElementById("add-item");

// Manipulação de input para não receber números.

newItem.addEventListener("input", () => {
  const hasNumber = /\d+/g;

  newItem.value = newItem.value.replace(hasNumber, "");
});
