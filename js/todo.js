const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {  // 로컬스토리지에 toDos array를 넣는 역할
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // toDo의 id가 li의 id와 다른 걸 남기는 함수(우리가 클릭한 li.id와 다른 toDo는 남겨두기)
  saveToDos();
}

function paintToDo(newTodo) {  // toDo를 그리는 역할
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌"
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  }
  toDos.push(newTodoObj);  // newTodoObj를 array에 push 하기
  paintToDo(newTodoObj);  // 화면에 toDoObj를 그리기
  saveToDos();  //  localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);  // localStorage에서 온 string이 살아있는 js object로 변경
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}