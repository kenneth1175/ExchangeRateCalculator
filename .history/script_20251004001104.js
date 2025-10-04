const currencyEl_one = document.getElementByID("currency-one");
const amountEl_one = document.getElementByID("amount-one");
const currencyEl_two = document.getElementByID("currency-two");
const amountEl_two = document.getElementByID("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate() {
  console.log("RAN");
}

// Event Listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

calculate();
