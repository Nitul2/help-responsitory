const playerArray = [];


function displayPlayer(player) {

    const playerTable = document.getElementById('player-table');
    playerTable.innerHTML = "";
    const button = document.getElementById('mybtn').setAttribute('disabled', 'true');
    for (let i = 0; i < player.length; i++) {


        if (player.length === 1) {

            const name = playerArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i + 1} </th>
            <td>${name}</td>
            `
            playerTable.appendChild(tr);
        }

        else if (player.length === 2) {
            const name = playerArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i + 1} </th>
            <td>${name}</td>
            `
            playerTable.appendChild(tr);
        }
        else if (player.length === 3) {
            const name = playerArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i + 1} </th>
            <td>${name}</td>
            `
            playerTable.appendChild(tr);
        }
        else if (player.length === 4) {

            const name = playerArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i + 1} </th>
            <td>${name}</td>
            `
            playerTable.appendChild(tr);
        }
        else if (player.length === 5) {

            const name = playerArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i + 1} </th>
            <td>${name}</td>
            `
            playerTable.appendChild(tr);
        }
        else {

            alert("selection is full ")
            button.disabled = true;

            return button;



        }
    }


}
function buttonPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName,
    }

    playerArray.push(playerObj);
    // console.log(playerArray)
    document.getElementById('select').innerText = playerArray.length;
    displayPlayer(playerArray)

}


document.getElementById('calculator').addEventListener('click', function () {


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



})
// the end-----------------------



