const buttons = document.getElementsByClassName("home_button");
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./index.html";
  });
}
