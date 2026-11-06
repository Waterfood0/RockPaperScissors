let name = prompt('Enter the your name');

let start = parseInt(prompt('If you  are ready enter the 1, if not ready 2'));
let score_enemy = 0;
let score_player = 0;
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

if(start === 1){
    game_start();
    finish();
}else{
    console.log('game over');
}


function game_start(){
    
    for(let i = 0; i < 5; i++){
        game();
        
    }
    
}

function game(){
    let enemy = getRandomInt(3) + 1;
        let player = parseInt(prompt('Enter the 1 if your choose the csissors or 2 - paper or 3 - block'));
        if (player >= 1 && player <=3){
            if (player === 1 && enemy === 2){
                score_player = score_player+1;
                console.log(`${name} - win`);
            }
            if (player === 1 && (enemy === 3)){
                score_enemy = score_enemy+1;
                console.log('enemy win');
            }
            if (player === 1 && (enemy === 1)){
                game();
            }


            if (player === 2 && enemy === 3){
                score_player = score_player+1;
                console.log(`${name} - win`);
            }
            if (player === 2 && (enemy === 1)){
                score_enemy = score_enemy+1;
                console.log('enemy win');
            }
            if (player === 2 && (enemy === 2)){
                game();
            }




            if (player === 3 && enemy === 1){
                score_player = score_player+1;
                console.log(`${name} - win`);
            }
            if (player === 3 && (enemy === 2)){
                score_enemy = score_enemy+1;
                console.log('enemy win');
            }
            if (player === 3 && (enemy === 3)){
                game();
            }
        }else{
            alert(`please enter the numbers 1 or 2 or 3 not ${player}`);
            game()
        }
}
function finish(){
    if(score_enemy > score_player){
        console.log(`enemy win score-${score_enemy}`);
    }else{
        console.log(`${name} win score-${score_player}`);
    }
}