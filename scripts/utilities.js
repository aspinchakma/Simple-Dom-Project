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

// Get value from element
export function getInnerText(id) {
  const getValue = document.getElementById(id).innerText;
  return parseFloat(getValue);
}

// Get value from input field
export function getInputValue(id) {
  const getValue = document.getElementById(id).value;
  return parseFloat(getValue);
}

// clear input value
export function clearValue(id) {
  const getId = document.getElementById(id);
  getId.value = "";
}

// Transaction history

export function transactionHistory(amount, title) {
  const history_container = document.getElementById("history_section");
  const div = document.createElement("div");
  div.classList.add("p-2");
  div.classList.add("lg:p-8");
  div.classList.add("mb-2");
  div.classList.add("border-2");
  div.classList.add("border-gray-400");
  const date = new Date();
  const formattedDate = `Date :${date.toString()}`;
  div.innerHTML = `
    <h3 class="font-bold text-xl">
        ${amount} Taka is Donated for ${title}
    </h3>
    <p class="text-gray-700">
       ${formattedDate}
    </p>
    `;
  history_container.appendChild(div);
}
