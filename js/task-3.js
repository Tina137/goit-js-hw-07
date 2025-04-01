const input = document.querySelector("input#name-input");
const textForInput = document.querySelector("span#name-output");
input.addEventListener("input", (e) => {
  if (e.target.value.trim()) {
    textForInput.textContent = e.target.value.trim();
  } else {
    textForInput.textContent = "Anonymous";
  }
});
