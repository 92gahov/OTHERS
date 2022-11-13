const body = document.body;
// body.append("Hello World");

// const div = document.createElement("div");
// // div.innerText = "Hello World";
// // div.textContent = "Hello World";
// const strong = document.createElement("strong");
// strong.innerText = "Hello World 2";
// div.append(strong);
// // div.innerHTML = `<strong>Hello World</strong>`;
// body.append(div);

// const div = document.querySelector("div");

// console.log(div.textContent);
// console.log(div.innerText);

/*------------------------------------------*/

const div = document.querySelector("div");
const spanHi = document.getElementById("hi");
const spanBye = document.getElementById("bye");

// console.log(spanHi.getAttribute("title"));
spanHi.removeAttribute("title");
spanHi.dataset.name = "hi";
spanHi.style.color = "red";

// spanBye.remove();
// div.removeChild(spanBye);
// div.append(spanBye)