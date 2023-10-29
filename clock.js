const clock = document.querySelector("h2#clock");

clock.innerText = "00:00"

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000)

// setTimeout(sayHello, 5000);

// const date = new Date();
// console.log(date.getDate());
// date.getDay();
// date.getFullYear();
// date.getHours();
// date.getMinutes();
// date.getSeconds();

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock, 1000);

console.log("1".padStart(2, "0"));
console.log("1".padEnd(2, "0"));

// new Date().getHours()
// String(new Date().getHours())