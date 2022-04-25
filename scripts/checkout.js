// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var money  = JSON.parse(localStorage.getItem("wallet"))

console.log(money);

let wallet = document.getElementById("wallet")
  wallet.innerText = money;


  