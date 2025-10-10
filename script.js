const addItem = document.getElementById("items");
const form = document.querySelector("form");
const listItems = document.querySelector("ul");
const notification = document.querySelector("#notification");

const closeNote = document.getElementById("close-icon");

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

  //Criando elemento e aplicando na lista;

  const newItem = document.createElement("li");
  const nameItem = document.createElement("span");
  const newCheckbox = document.createElement("input");
  const trashIcon = document.createElement("img");

  newCheckbox.type = "checkbox";
  newCheckbox.name = "checkbox-items";
  newCheckbox.id = "check-items";

  newItem.className = "products";
  nameItem.innerText = value;

  trashIcon.src = "/icons/trash.svg";
  trashIcon.alt = "ícone de Lixeira";
  trashIcon.className = "trashed";

  newItem.append(newCheckbox, nameItem, trashIcon);
  listItems.prepend(newItem);

  addItem.value = "";
  addItem.focus();

  // Evento de click pra excluir item criado;

  trashIcon.addEventListener("click", () => {
    newItem.remove();

    // Adicionando notificação em tela;

    notification.classList.add("visible-note");

    // Definindo tempo limite pra a notificação;

    setTimeout(() => {
      notification.classList.remove("visible-note");
    }, 2000);
  });
};

//Removendo notificação ao clicar no "x";

closeNote.addEventListener("click", () => {
  notification.remove();
});

// Marca/desmarca item e aplica estilos via delegação de eventos

listItems.addEventListener("click", (event) => {
  const checkbox = event.target.closest('input[type="checkbox"]');
  if (!checkbox) return;

  const li = checkbox.closest("li");
  if (!li) return;

  const span = li.querySelector("span");

  if (checkbox.checked) {
    li.style.backgroundColor = "#D1D5DB";
    if (span) span.style.textDecoration = "line-through";
  } else {
    li.style.backgroundColor = "";
    if (span) span.style.textDecoration = "none";
  }
});
