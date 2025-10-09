const addItem = document.getElementById("items");
const form = document.querySelector("form");
const items = document.querySelector("ul");

// Manipulação de input para não receber números.

addItem.addEventListener("input", () => {
  const hasNumber = /\d+/g;

  addItem.value = addItem.value.replace(hasNumber, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  // Garantindo que itens e espaços vazios não sejam adicionados a lista.

  const value = addItem.value.trim();
  if (value === "") {
    return;
  }

  //Criando elemento e aplicando na lista.

  const newItem = document.createElement("li");
  const nameItem = document.createElement("span");
  const checkbox = document.createElement("input");
  const trashIcon = document.createElement("img");

  checkbox.type = "checkbox";
  checkbox.name = "checkbox-items";
  checkbox.id = "check-items";

  newItem.className = "products";
  nameItem.innerText = value;

  trashIcon.src = "/icons/trash.svg";
  trashIcon.alt = "ícone de Lixeira";
  trashIcon.className = "trashed";

  newItem.append(checkbox, nameItem, trashIcon);
  items.prepend(newItem);

  addItem.value = "";
};
