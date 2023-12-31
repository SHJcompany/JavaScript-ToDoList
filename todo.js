const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // console.log(li.id);
  li.remove();
  // console.log(typeof li.id);
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
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
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("오늘의 저녁메뉴는", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// function sexyFilter() {

// }

// [1,2,3,4].filter(sexyFilter)

// parsedToDos.forEach((item) => console.log('오늘의 저녁메뉴는', item));
// (item) => console.log("오늘의 저녁식사는", item)
// function sayHello(item) {
//   console.log("오늘의 저녁식사는", item)
// }