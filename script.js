const addItem = document.getElementById("new-item");
const form = document.querySelector("form");
const newItem = document.querySelector("li");

// Manipulação de input para não receber números.

addItem.addEventListener("input", () => {
  const hasNumber = /\d+/g;

  addItem.value = addItem.value.replace(hasNumber, "");
});

form.onsubmit = (event) => {
  event.preventDefault();
};
