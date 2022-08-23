var i = 0;
function setPlayer(playerName){
    if(i > 4){
        alert('You cannot select more than five players.');
        return;
    }
    const selectPlayer = document.getElementById('select-player');
    const li = document.createElement('li');
    li.innerText = playerName;
    selectPlayer.appendChild(li);
    i = i + 1;
}

let btnMessi = document.getElementById('btn-messi').addEventListener('click', function(){
    let playerName = 'Lionel Messi';
    if(i<5){
        document.getElementById('btn-messi').disabled = true;
    }
    setPlayer(playerName);

})

let btnNeymar = document.getElementById('btn-neymar').addEventListener('click', function(){
    let playerName = 'Neymar Jr';
    if(i<5){
        document.getElementById('btn-neymar').disabled = true;
    }
    setPlayer(playerName);
    
})
let btnKylian = document.getElementById('btn-kylian').addEventListener('click', function(){
    let playerName = 'Kylian Mbappe';
    if(i<5){
        document.getElementById('btn-kylian').disabled = true;
    }
    setPlayer(playerName);
    
})
let btnVitor = document.getElementById('btn-vitor').addEventListener('click', function(){
    let playerName = 'Vitor Machado';
    if(i<5){
        document.getElementById('btn-vitor').disabled = true;
    }
    setPlayer(playerName);
    
})
let btnSergio = document.getElementById('btn-sergio').addEventListener('click', function(){
    let playerName = 'Sergio Ramos';
    if(i<5){
        document.getElementById('btn-sergio').disabled = true;
    }
    setPlayer(playerName);
    
})
let btnRenato = document.getElementById('btn-renato').addEventListener('click', function(){
    let playerName = 'Renato Sanches';
    if(i<5){
        document.getElementById('btn-renato').disabled = true;
    }
    setPlayer(playerName);
    
})

document.getElementById('btn-calculate').addEventListener('click', function(){
    let playerRate = document.getElementById('player-rate');
    let playerRateString = playerRate.value;
    let playerRateAmount = parseFloat(playerRateString);
    if(isNaN(playerRateAmount)){
        alert('Please correct the input for per player.');
        return;
    }

    let totalPlayerRate = playerRateAmount * i;
    
    document.getElementById('player-expenses').innerText = totalPlayerRate;
    
})

document.getElementById('total-calculate').addEventListener('click', function(){
    let managerCost = document.getElementById('manager-cost');
    let managerCostString = managerCost.value;
    let managerCostAmount = parseFloat(managerCostString);

    if(isNaN(managerCostAmount)){
        alert('Please correct the input for Manager.');
        return;
    }

    let coachCost = document.getElementById('coach-cost');
    let coachCostString = coachCost.value;
    let coachCostAmount = parseFloat(coachCostString);

    if(isNaN(coachCostAmount)){
        alert('Please correct the input for Coach.');
        return;
    }

    let playerExpensess = document.getElementById('player-expenses');
    let playerExpensessString = playerExpensess.innerText;
    let playerExpensessAmount = parseFloat(playerExpensessString);
    
    let totalCost = managerCostAmount + coachCostAmount + playerExpensessAmount;
    
    document.getElementById('total-cost').innerText = totalCost;
    
})

