document.getElementById("Deposit-btn").addEventListener('click',function(){

    const inputFiledOfDeposit = document.getElementById("input-Deposit")
    const inputTextOfDepositString = inputFiledOfDeposit.value;
    const inputTextOfDeposit = parseFloat(inputTextOfDepositString)
     
    const AmountOfDeposit = document.getElementById("Amount-deposit")
    const NewAmountOfDepositString = AmountOfDeposit.innerText
    const NewAmountOfDeposit = parseFloat(NewAmountOfDepositString)

    const TotalAmountOfDeposit = NewAmountOfDeposit + inputTextOfDeposit  ;
    
    AmountOfDeposit.innerText = TotalAmountOfDeposit;

    inputFiledOfDeposit.value=''
 
    const AmountOfBalance = document.getElementById("Amount-balance")
    const AmountTextOfBalanceString = AmountOfBalance.innerText
    const AmountTextOfBalance = parseFloat(AmountTextOfBalanceString)

    const mainBalanceOfAmount = TotalAmountOfDeposit + AmountTextOfBalance 
    AmountOfBalance.innerText = mainBalanceOfAmount
   
     
   
})


document.getElementById("Withdraw-btn").addEventListener('click',function(){

    const inputFiledOfWithdraw = document.getElementById("input-Withdraw");
    const inputTextOfWithdrawString = inputFiledOfWithdraw.value;
    const inputTextOfWithdraw =parseFloat(inputTextOfWithdrawString)

    const AmountOfWithdraw = document.getElementById("Amount-withdraw")
    const AmountTextOfWithdrawString = AmountOfWithdraw.innerText
    const AmountTextOfWithdraw = parseFloat(AmountTextOfWithdrawString)

    const TotalAmountOfWithdraw = inputTextOfWithdraw + AmountTextOfWithdraw

    AmountOfWithdraw.innerText = TotalAmountOfWithdraw

    inputFiledOfWithdraw.value=""
        
    const AmountOfBalance = document.getElementById("Amount-balance")
    const AmountTextOfBalanceString = AmountOfBalance.innerText
    const AmountTextOfBalance = parseFloat(AmountTextOfBalanceString)

    const mainBalanceOfAmount = AmountTextOfBalance - TotalAmountOfWithdraw  
    AmountOfBalance.innerText = mainBalanceOfAmount


})
