//Login button event handler
const loginButton = document.getElementById('login-btn')
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
//deposit button event handler
const depositBtn = document.getElementById('add-deposit');
depositBtn.addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input').value;
    // const depositNumber = parseFloat(depositInput);
    const depositNumber = getInputNumber('deposit-input')

    // const currentDeposit = document.getElementById('current-deposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('current-deposit').innerText = totalDeposit;

    updateSpanText('current-deposit', depositNumber);
    updateSpanText('current-balance', depositNumber);

    document.getElementById('deposit-input').value = '';
})

//withdraw button event handler
const withdrawBtn = document.getElementById('add-withdraw');
withdrawBtn.addEventListener('click', function () {
   const withdrawNumber = getInputNumber('withdraw-amount')

   updateSpanText('current-withdraw', withdrawNumber);
   updateSpanText('current-balance', -1 * withdrawNumber);

   document.getElementById('withdraw-amount').value = '';
})
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}