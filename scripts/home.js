import {
  changingButtonColorFunc,
  clearValue,
  getInnerText,
  getInputValue,
  hiddenFunc,
  transactionHistory,
} from "./utilities.js";
// Donation Button
document.getElementById("donation_button").addEventListener("click", () => {
  // donation section visibale
  hiddenFunc("donation_section", false);
  // history section hidden
  hiddenFunc("history_section", true);

  //changing color for donation button
  changingButtonColorFunc("donation_button", true);
  // changing color for history button
  changingButtonColorFunc("history_button", false);
});

document.getElementById("history_button").addEventListener("click", () => {
  // visible history section
  hiddenFunc("history_section", false);
  // hide donation section
  hiddenFunc("donation_section", true);

  //changing color for donation button
  changingButtonColorFunc("donation_button", false);
  // changing color for history button
  changingButtonColorFunc("history_button", true);
});

// Donation Section
document
  .getElementById("donate_noakhali_button")
  .addEventListener("click", () => {
    const mainBalance = getInnerText("main_balance");
    const donatedBalanceNoakhali = getInputValue("donated_input_noakhali");
    const TotalBalanceNoakhali = getInnerText("Total_amount_noakhali");
    if (donatedBalanceNoakhali >= 0 && !isNaN(donatedBalanceNoakhali)) {
      const totalBalance = mainBalance + donatedBalanceNoakhali;
      document.getElementById("main_balance").innerText = totalBalance;
      document.getElementById("Total_amount_noakhali").innerText =
        TotalBalanceNoakhali + donatedBalanceNoakhali;
      transactionHistory(
        donatedBalanceNoakhali,
        "Flood at Noakhali, Bangladesh"
      );

      // clear input Field
      clearValue("donated_input_noakhali");
    } else {
      alert(`We're Sorry!
Your donation could not be processed.`);
    }
  });
