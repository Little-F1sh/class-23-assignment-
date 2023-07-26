        // deposit & withdraw btn
        const depositBtn = document.querySelector('#deposit-btn');
        const withdrawBtn = document.querySelector('#withdraw-btn');

        // deposit & withdraw field
        const depositField = document.querySelector('#deposit-field');
        const withdrawField = document.querySelector('#withdraw-field');

        // deposit, withdraw & balance amount
        const depositAmount = document.getElementById('deposit-amount');
        const withdrawAmount = document.getElementById('withdraw-amount');
        const balanceAmount = document.getElementById('balance-amount');

        // Add event listener for deposit button
        depositBtn.addEventListener('click', function() {
            const depositFieldValue = depositField.value; // Corrected 'Value' to 'value'
            const depositConvertAmount = parseFloat(depositFieldValue);
            const previousDeposit = depositAmount.innerText;
            const previousDepositConvert = parseFloat(previousDeposit);

            const totalDeposit = depositConvertAmount + previousDepositConvert;

            depositAmount.innerText = totalDeposit;
            updateBalance();
        });

        // Add event listener for withdraw button
        withdrawBtn.addEventListener('click', function() {
            const withdrawFieldValue = withdrawField.value;
            const withdrawConvertAmount = parseFloat(withdrawFieldValue);
            const previousWithdraw = withdrawAmount.innerText;
            const previousWithdrawConvert = parseFloat(previousWithdraw);

            const totalWithdraw = withdrawConvertAmount + previousWithdrawConvert;

            withdrawAmount.innerText = totalWithdraw;
            updateBalance();
        });

        // Function to update the balance
        function updateBalance() {
            const deposit = parseFloat(depositAmount.innerText);
            const withdraw = parseFloat(withdrawAmount.innerText);
            const balance = deposit - withdraw;
            balanceAmount.innerText = balance;
        }