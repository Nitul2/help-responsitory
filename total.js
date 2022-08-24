
document.getElementById('total').addEventListener('click', function () {
    const perPlayer = document.getElementById("per-player")
    const newPlayerString = perPlayer.value;
    const newPlayerAmount = parseFloat(newPlayerString);


    const selectTotalElement = document.getElementById('select');
    const previousSelectTotalString = selectTotalElement.innerText;
    const previousSelectTotal = parseFloat(previousSelectTotalString);

    const expensesTotalElement = document.getElementById('expenses');
    const previousExpensesTotalString = expensesTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousExpensesTotalString);
    const balanceTotal = "";
    const expenses = newPlayerAmount * previousSelectTotal
    const allTotal = balanceTotal + expenses
    expensesTotalElement.innerText = allTotal;


    const managerField = document.getElementById('manager')
    const managerFieldString = managerField.value;
    const managerTotal = parseInt(managerFieldString)
    managerField.innerText = managerTotal;
    managerField.innerText = '';



    const coachField = document.getElementById('coach')
    const coachFieldString = coachField.value;
    const coachTotal = parseInt(coachFieldString);
    coachField.innerText = coachTotal
    coachField.innerText = '';


    const fullAmount = managerTotal + coachTotal;
    const know = parseFloat(fullAmount)
    const knowOne = know + allTotal;




    const totalAll = document.getElementById('total-all');
    totalAll.innerText = "";
    const totalString = totalAll.innerText;


    const allAmountTotal = knowOne + totalString;

    totalAll.innerText = allAmountTotal;





})
