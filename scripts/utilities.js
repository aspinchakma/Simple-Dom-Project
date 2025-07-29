// section hide function
export function hiddenFunc(id, isHidden) {
  const getId = document.getElementById(id);
  if (isHidden) {
    getId.classList.add("hidden");
  } else {
    getId.classList.remove("hidden");
  }
}

// changing button color section
export function changingButtonColorFunc(id, isGreen) {
  const getId = document.getElementById(id);
  if (isGreen) {
    getId.style.backgroundColor = "#B4F461";
    getId.style.border = "2px solid #B4F461";
  } else {
    getId.style.backgroundColor = "white";
    getId.style.border = "2px solid #b1b1b1";
  }
}
