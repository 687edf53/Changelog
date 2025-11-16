const timeElements = document.querySelectorAll(".changelog ul li span");
let DateObj = new Date().getDate();

timeElements.forEach((time) => {
  time.textContent = DateObj;
});

console.log(DateObj);
