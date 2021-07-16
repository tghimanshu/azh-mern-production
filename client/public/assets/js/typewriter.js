// Init On DOM Load
// document.addEventListener("DOMContentLoaded", init);
setTimeout(() => {
  init();
}, 2000);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  console.log("done");
  new TypeWriter(txtElement, words, wait);
}
