const bntrock = document.querySelector("#rock");
const bntscissors = document.querySelector("#scissors");
const bntpaper = document.querySelector("#paper");
const scorepole = document.querySelector(".score");
const enterlog = document.querySelector(".enter-log");
const h1score = document.createElement("h1");
const h1log = document.createElement("h1");

h1score.textContent = "score";
h1log.textContent = "enter";
h1score.setAttribute("class", "h1score");
h1log.setAttribute("class", "h1log");
scorepole.appendChild(h1score);
enterlog.appendChild(h1log);

let name = prompt('Enter the your name');

let enemy = [1, 1, 1];
let score_enemy = 0;
let score_player = 0;
let player = [1, 1, 1];
// scissors paper rock


bntrock.addEventListener("click", function(e){
    if(score_player !== 5 && score_enemy !== 5){
        enterEnemy();
        enterPlayer();
        player[2] = 1;
        game();
    }else{
        if(score_enemy > score_player){
            h1score.textContent = `enemy is winner, score-${score_enemy}, player score-${score_player}`;
            scorepole.appendChild(h1score);
        }
        if(score_enemy < score_player){
            h1score.textContent = `${name} is winner, score-${score_player}, enemy score-${score_enemy}`;
            scorepole.appendChild(h1score);
        }else{
            h1score.textContent = `nobody win`;
            scorepole.appendChild(h1score);
        }
    }
    
});
bntpaper.addEventListener("click", function(e){
    if(score_player !== 5 && score_enemy !== 5){
        enterEnemy();
        enterPlayer();
        player[1] = 1;
        game();
    }else{
        if(score_enemy > score_player){
            h1score.textContent = `enemy is winner, score-${score_enemy}, player score-${score_player}`;
            scorepole.appendChild(h1score);
        }
        if(score_enemy < score_player){
            h1score.textContent = `${name} is winner, score-${score_player}, enemy score-${score_enemy}`;
            scorepole.appendChild(h1score);
        }else{
            h1score.textContent = `nobody win`;
            scorepole.appendChild(h1score);
        }
    }
});
bntscissors.addEventListener("click", function(e){
    if(score_player !== 5 && score_enemy !== 5){
        enterEnemy();
        enterPlayer();
        player[0] = 1;
        game();
    }else{
        if(score_enemy > score_player){
            h1score.textContent = `enemy is winner, score-${score_enemy}, player score-${score_player}`;
            scorepole.appendChild(h1score);
        }
        if(score_enemy < score_player){
            h1score.textContent = `${name} is winner, score-${score_player}, enemy score-${score_enemy}`;
            scorepole.appendChild(h1score);
        }else{
            h1score.textContent = `nobody win`;
            scorepole.appendChild(h1score);
        }
    }
});

function enterEnemy(){
    num = getRandomInt(3);
    for(let i = 0; i <= 2; i++){
        enemy[i] = 0;
    }
    enemy[num] = 1;
}
function enterPlayer(){
    for(let i = 0; i <= 2; i++){
        player[i] = 0;
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function game(){
    if (player[2] === 1 && player[2] !== enemy[2]){
        if (player[2] === enemy[1]){
            h1log.textContent = 'enemy win rock - paper';
            score_enemy = score_enemy+1;
            console.log('enemy win rock - paper');
            enterlog.appendChild(h1log);
        }
        if (player[2] === enemy[0]){
            h1log.textContent = `${name} win rock - scissors`;
            score_player = score_player+1;
            console.log(`${name} win rock - scissors`);
            enterlog.appendChild(h1log);
            
        }
              
    }
    if(player[2] === enemy[2] && player[2] !== 0){
        h1log.textContent = 'nobody win rock - rock';
        console.log(`nobody win rock -rock`);
        enterlog.appendChild(h1log);
    } 
    if (player[1] === 1 && player[1] !== enemy[1]){
        if (player[1] === enemy[0]){
            h1log.textContent = 'enemy win paper - scissors';
            score_enemy = score_enemy+1;
            console.log('enemy win paper - scissors');
            enterlog.appendChild(h1log);
        }
        if (player[1] === enemy[2]){
            h1log.textContent = `${name} win paper - rock `;
            score_player = score_player+1;
            console.log(`${name} win paper - rock `);
            enterlog.appendChild(h1log);
        }
               
    }
    if(player[1] === enemy[1] && player[1] !== 0 ){
        h1log.textContent = `nobody win paper - paper`;
        console.log(`nobody win paper -paper`);
        enterlog.appendChild(h1log);
    }
    if (player[0] === 1 && player[0] !== enemy[0]){
        if (player[0] === enemy[2]){
            h1log.textContent = 'enemy win scissors - rock';
            score_enemy = score_enemy+1;
            console.log('enemy win scissors - rock');
            enterlog.appendChild(h1log);
        }
        if (player[0] === enemy[1]){
            h1log.textContent = `${name} win scissors - paper`;
            score_player = score_player+1;
            console.log(`${name} win scissors - paper`);
            enterlog.appendChild(h1log);
        }
              
    }
    if(player[0] === enemy[0] && player[0] !== 0){
        h1log.textContent = `nobody win scissors - scissors`;
        enterlog.appendChild(h1log);
        console.log(`nobody win scissors -scissors`);
    } 
    h1score.textContent = score_player;
    scorepole.appendChild(h1score);
} 