// app.js
const introP = document.querySelector(".intro");
console.log(introP.textContent);

const button = document.querySelector("#myButton");

// Parameter 1: 'click' (the event type)
// Parameter 2: A function that logs a message.
button.addEventListener('click', () => {
  console.log("Button was clicked!");
});

// Using a different event type as the first parameter.
// Now the function runs when the mouse moves over the button.
button.addEventListener('mouseover', () => {
  console.log("Mouse is over the button!");
});