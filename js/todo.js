const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
   // object나 array등을 string으로 바꾸어줌 -> 배열에 이미 문자열로 저장되어 있는데 왜쓸까?
   //localstorage는 배열을 저장하지 못함, 배열 변수를 넘겨주어도 [a,b,c,]로 저장되는게 아닌 a,b,c로 저장됨
   //localstorage는 문자열만 저장 가능 -> stringfy를 이용하여 "["a", "b", "c"]" 배열 모양의 문자열로 저장
   //이후 값을 꺼내오려면 JSON.parse를 사용
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove(); // HTML로 보여지는 부분 삭제
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   //localStorage에서 삭제
   saveToDos(); // 변경된 toDos localStorage에 새로 저장
}

function paintToDo(newTodo) {
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   span.innerText = newTodo.text;
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
   const newTodoObj = {
      text: newTodo,
      id: Date.now(),
   };
   toDos.push(newTodoObj);
   paintToDo(newTodoObj);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
   const parseToDos = JSON.parse(savedToDos);
   toDos = parseToDos;
   parseToDos.forEach(paintToDo);
}
