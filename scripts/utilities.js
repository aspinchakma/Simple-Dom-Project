// section hide function
export function hiddenFunc(id, isHidden) {
  const getId = document.getElementById(id);
  if (isHidden) {
    getId.classList.add("hidden");
  } else {
    getId.classList.remove("hidden");
  }
}
