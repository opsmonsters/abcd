const addTodo = document.querySelector(".add-todo-input");
const addTodoButton = document.querySelector(".add-todo-button");
const todoList = document.querySelector(".todo-ul");
const search = document.querySelector(".header-search");

addTodoButton.addEventListener("click", (event) => {
  event.preventDefault();
  const todo = addTodo.value;
  const html = `<li class="todo-li"><span>${todo}</span> <img class="todo-trash-can" onClick="return this.parentNode.remove()" src="trash-can.svg" /> </li>`;
  todoList.innerHTML += html;
});

search.addEventListener("keyup", () => {
  const searchTerm = search.value;
  console.log(searchTerm);
  Array.from(todoList.children)
    .filter((todo) => todo.textContent.includes(searchTerm))
    .forEach((todo) => todo.classList.remove("filtered"));
  Array.from(todoList.children)
    .filter((todo) => !todo.textContent.includes(searchTerm))
    .forEach((todo) => todo.classList.add("filtered"));
});
