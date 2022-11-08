let delay = -1;

function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}+Flag">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player2}+Flag">
        </li>
        <div class="separator"><hr></div>
    `
}
function creatCard(date, day, games) {
    delay += 1;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>  
    `
}
document.querySelector('#cards').innerHTML = 

        creatCard("24/11", "Quinta", 
            createGame("switzerland",'7:00',"cameroon") + 
            createGame("uruguay",'10:00',"south-korea") +
            createGame("portugal",'13:00',"ghana") +
            createGame("brazil",'16:00',"serbia") 
        )+
        creatCard("28/11", "Segunda", 
            createGame("cameroon",'7:00',"serbia") + 
            createGame("south-korea",'10:00',"ghana") +
            createGame("brazil",'13:00',"switzerland") +
            createGame("portugal",'16:00',"uruguay") 
        )
