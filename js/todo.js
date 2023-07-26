const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getAnimations("todo-list");

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = ""; //input 박스를 비우기 위해
   console.log(toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
