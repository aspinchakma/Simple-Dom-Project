import {
  changingButtonColorFunc,
  clearValue,
  getInnerText,
  getInputValue,
  hiddenFunc,
  transactionHistory,
} from "./utilities.js";

// Blog Button
const blogs = document.getElementsByClassName("blog_button");
for (let blog of blogs) {
  blog.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../blog.html";
  });
}

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

    // checking
    if (donatedBalanceNoakhali > 0 && !isNaN(donatedBalanceNoakhali)) {
      // total Balance
      const totalBalance = mainBalance + donatedBalanceNoakhali;

      // set the total balance on main blance
      document.getElementById("main_balance").innerText = totalBalance;

      // paymenst successfull message on modal
      document.getElementById("noakhali_payment_successfull").innerText =
        donatedBalanceNoakhali;

      // total maount in section
      document.getElementById("Total_amount_noakhali").innerText =
        TotalBalanceNoakhali + donatedBalanceNoakhali;

      // adding transaction history
      transactionHistory(
        donatedBalanceNoakhali,
        "Flood at Noakhali, Bangladesh"
      );

      // Modal Opening
      document.getElementById("my_modal_1").showModal();
    } else {
      alert(`We're Sorry!
Your donation could not be processed.`);
    }

    // clear input Field
    clearValue("donated_input_noakhali");
  });

// Feni section

document
  .getElementById("feni_donate_now_button")
  .addEventListener("click", function () {
    const mainBalance = getInnerText("main_balance");
    const donatedBalanceFeni = getInputValue("donated_blance_input");
    const TotalBalanceFeni = getInnerText("total_amount_feni");

    // requirement
    if (donatedBalanceFeni > 0 && !isNaN(donatedBalanceFeni)) {
      // Main balance
      document.getElementById("main_balance").innerText =
        mainBalance + donatedBalanceFeni;

      // set on total amount feni section
      document.getElementById("total_amount_feni").innerText =
        TotalBalanceFeni + donatedBalanceFeni;

      // show amout on modal
      document.getElementById("feni_payment_successfull").innerText =
        donatedBalanceFeni;

      // Transaction History
      transactionHistory(donatedBalanceFeni, "Flood Relief in Feni,Bangladesh");

      // opening modal
      document.getElementById("my_modal_2").showModal();
    } else {
      alert(`We're Sorry!
Your donation could not be processed.`);
    }

    // Clear input field in feni section
    clearValue("donated_blance_input");
  });

// quota movement section

document
  .getElementById("quote_movement_donate_now_button")
  .addEventListener("click", function () {
    // get main balance, section blance, input value
    const mainBalance = getInnerText("main_balance");
    const donatedBalanceQuota = getInputValue("quota_movement_input");
    const TotalBalanceQuota = getInnerText("quota_section_total_balance");

    // checking invalid input for quota movement input field
    if (donatedBalanceQuota > 0 && !isNaN(donatedBalanceQuota)) {
      // Main balance
      document.getElementById("main_balance").innerText =
        mainBalance + donatedBalanceQuota;

      // section balance
      document.getElementById("quota_section_total_balance").innerText =
        TotalBalanceQuota + donatedBalanceQuota;

      // Show amount on modal
      document.getElementById("quota_movement_payment_successfull").innerText =
        donatedBalanceQuota;

      // Showing the data on history
      // Transaction History
      transactionHistory(donatedBalanceQuota, "Injured in the Quota Movement");

      // showing Modal
      document.getElementById("my_modal_3").showModal();
    } else {
      alert(`We're Sorry!
Your donation could not be processed.`);
    }

    // Clear input field in feni section
    clearValue("quota_movement_input");
  });

// Transaction History container
const parentContainer = document.getElementById("history_section");
parentContainer.addEventListener("click", (e) => {
  // Removing Div Container
  const divContainer = e.target.closest("div");
  parentContainer.removeChild(divContainer);
});
