// Selectora
const toDoInput = document.querySelector(".todo__input");
const addBtn = document.querySelector(".todo__btn");
const deleteBtn = document.querySelector(".todo__delete");
const toDolist = document.querySelector(".todo__list");
// Listenrs
addBtn.addEventListener("click", addToDo);
toDolist.addEventListener("click", removeToDo);
// Functions

function removeToDo(e) {
  const toDo = e.target;
  if (toDo.classList[0] === "todo__check") {
    toDo.parentElement.parentElement.classList.toggle("todo__checked");
  }
  if (toDo.classList[0] === "todo__delete") {
    toDo.parentElement.parentElement.remove();
  }
}

function addToDo(event) {
  event.preventDefault();
  //todo div

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo__item");
  //todo li
  const toDoLi = document.createElement("li");
  toDoLi.innerText = toDoInput.value;
  toDoLi.classList.add("todo__text");
  toDoDiv.appendChild(toDoLi);
  //   div
  const toDoDiv2 = document.createElement("div");
  toDoDiv2.classList.add("todo__btns");
  toDoDiv.appendChild(toDoDiv2);
  //  check button
  const completedButton = document.createElement("button");
  completedButton.innerText = "Check";
  completedButton.classList.add("todo__check");
  toDoDiv2.appendChild(completedButton);
  //   delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("todo__delete");
  toDoDiv2.appendChild(deleteButton);
  //   appemnd
  if (toDoInput.value === "") return;
  toDolist.appendChild(toDoDiv);
  toDoInput.value = "";
}
