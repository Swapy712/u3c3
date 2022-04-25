// Store the wallet amount to your local storage with key "amount"

function addmoney(){
   
    let amount = document.getElementById("amount").value 

    let wallet = document.getElementById("wallet")
        wallet.innerText = amount

    localStorage.setItem("wallet",JSON.stringify(amount));
}
