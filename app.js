const incomefield = document.getElementById("income_field");
const foodField = document.getElementById("food_field");
const rentField = document.getElementById("rent_field");
const clothesField = document.getElementById("clothes_field");
const calculateBtn = document.getElementById("calculateBtn");
const balanceId = document.getElementById("balanceId");

const totalExpenses = document.getElementById("total-expenses");
const saveField = document.getElementById("save_field");
const saveBtn = document.getElementById("saveBtn");
const savingAmount = document.getElementById("saving-amount");
const remainingBalanace = document.getElementById("remaining-balance");

// Addition Function
function addition() {
  const foodAmount = parseInt(foodField.value);
  const rentAmount = parseInt(rentField.value);
  const clothesAmount = parseInt(clothesField.value);

  const TotalExpense = foodAmount + rentAmount + clothesAmount;
  totalExpenses.innerText = TotalExpense;
}

// TOTAL EXPENSES
calculateBtn.addEventListener("click", function () {
  addition();
  totalBalance();
});

// BALANCE
function totalBalance() {
  const income = parseInt(incomefield.value);
  const totalExpensesValue = parseInt(totalExpenses.innerText);
  const balance = income - totalExpensesValue;
  balanceId.innerText = balance;
}

// SAVING
function getPrice() {
  var numVal1 = parseInt(balanceId.innerText);
  var numVal2 = parseInt(saveField.value);

  var totalValue =  numVal1 * (numVal2 / 100);
  savingAmount.innerText = totalValue;

  remainingBalanace.innerText = balanceId.innerText - savingAmount.innerText;
}

// Saving Function
saveBtn.addEventListener("click", function () {
    getPrice();
});

