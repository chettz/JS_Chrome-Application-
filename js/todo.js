const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;
   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span); //span을 li자식으로 넣기 위한 구문
   li.appendChild(button);
   toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = ""; //input 박스를 비우기 위해
   paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
