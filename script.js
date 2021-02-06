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
    const depositInput = document.getElementById('deposit-input').value;
    const depositNumber = parseFloat(depositInput);

    const currentDeposit = document.getElementById('current-deposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById('current-deposit').innerText = totalDeposit;
    document.getElementById('deposit-input').value = '';
})