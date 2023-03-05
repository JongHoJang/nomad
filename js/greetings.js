
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");  // login-form 안에서 input 찾기
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);  //hidden 이라는 classname을 추가해 form을 숨김
  const username = loginInput.value;  // 유저의 이름을 변수로 저장하고
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}