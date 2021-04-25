const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const addBtn = document.querySelector("add");

// const dummyTransactions = [
//   { id: 1, text: "flower", amount: -20 },
//   { id: 2, text: "salary", amount: 1320 },
//   { id: 3, text: "book", amount: -50 },
//   { id: 4, text: "camera", amount: -600 },
// ];

// 從local storage拿資料
const localStorageTransactions = JSON.parse(
  localStorage.getItem("transaction")
);

let transactions =
  localStorage.getItem("transaction") !== null ? localStorageTransactions : [];

// add transaction
function addTransaction(e) {
  e.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please enter the blank field!");
  } else if (isNaN(parseInt(amount.value))) {
    console.log(parseInt(amount.value));
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };
    transactions.push(transaction);
    addTransactionDom(transaction);
    updateValues();
    updateLocalStorage();
    text.value = "";
    amount.value = "";
  }
}

// generate random ID
function generateID() {
  return Math.floor(Math.random() * 1000000000);
}

// add transaction to DOM
function addTransactionDom(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
  ${transaction.text}<apan>${sign}${Math.abs(transaction.amount)}</span>
  <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;
  list.appendChild(item);
}

// total income, balance, and expense
function updateValues() {
  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });

  const total = amounts
    .reduce((acc, item) => {
      return (acc += item);
    }, 0)
    .toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = Math.abs(
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0)
  ).toFixed(2);

  balance.innerHTML = `$${total}`;
  moneyMinus.innerHTML = `$${expense}`;
  moneyPlus.innerHTML = `$${income}`;
}
updateValues();
// updateLocalStorage();

// remove
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  updateLocalStorage();
  updateValues();
  init();
}

//update local
function updateLocalStorage() {
  localStorage.setItem("transaction", JSON.stringify(transactions));
}

// init
function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDom);
}
init();

form.addEventListener("submit", addTransaction);
