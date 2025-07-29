import { hiddenFunc } from "./utilities.js";
// Donation Button
document.getElementById("donation_button").addEventListener("click", () => {
  // donation section visibale
  hiddenFunc("donation_section", false);
  // history section hidden
  hiddenFunc("history_section", true);
});

document.getElementById("history_button").addEventListener("click", () => {
  // visible history section
  hiddenFunc("history_section", false);
  // hide donation section
  hiddenFunc("donation_section", true);
});
