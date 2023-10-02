const assistant = document.getElementById("assistant");
const firstBtn = document.getElementById("firstbtn");
const secondBtn = document.getElementById("secondbtn");
const resetBtn = document.getElementById("resetbtn");

const timeline = gsap.timeline();

gsap.set(assistant, {
    x: 0,
    y: 600,
    opacity: 1,
    backgroundColor: "blue",
    width: "50px",
    height: "50px",
  });
  
  //event listeners for button interactions
  firstBtn.addEventListener("click", () => {
    gsap.to(assistant, {
      x: firstBtn.offsetLeft,
      y: firstBtn.offsetTop + 20,
      duration: 1,
    });
    showMessage("You clicked Button 1.");
  });
  
  secondBtn.addEventListener("click", () => {
    gsap.to(assistant, {
      x: secondBtn.offsetLeft,
      y: secondBtn.offsetTop + 20,
      duration: 1,
    });
    showMessage("You clicked Button 2.");
  });
  
  resetBtn.addEventListener("click", () => {
    gsap.to(assistant, {
      x: 0,
      y: window.innerHeight - assistant.offsetHeight,
      duration: 1,
    });
  });
  
  // function to show a message
  function showMessage(message) {
    console.log(message);
  }