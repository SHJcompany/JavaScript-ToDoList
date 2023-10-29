// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if(username === ""){
//         alert("please write your name");
//     } else if(username.length > 15) {
//         alert("Your name is too long.");
//     }
//     console.log(loginInput.value); // 3, 2 console.dir(loginInput)
//     console.log("click!!!");  // 1
// }

// loginButton.addEventListener("click", onLoginBtnClick)

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username + "!";
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // paintGreetings(username);
    console.log(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // paintGreetings(savedUsername);
}

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(event);
// }

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }

// const link = document.querySelector("a");

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");
// }

// link.addEventListener("click", handleLinkClick)