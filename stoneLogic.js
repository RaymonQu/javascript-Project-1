function initialize(){
    pile1 = 3;
    pile2 = 3;
    pile3 = 3;
    pile1Gone = false;
    pile2Gone = false;
    pile3Gone = false;
    whoTookLast = "Noone";
    button1 = document.getElementById("button1");
    button2 = document.getElementById("button2");
    button3 = document.getElementById("button3");
    winText = document.getElementById("winOrLose");
}

function decreaseRocks(a){
    if(a == 1){
        pile1--;
        whoTookLast = "Player";
        update(a);
        if(!pile1Gone){
            pile1 -= goblintake();
            whoTookLast = "Goblin";
            update(a);
        }
    }
    if(a == 2){
        console.log("work");
        pile2--;
        whoTookLast = "Player";
        update(a);
        if(!pile2Gone){
            pile2 -= goblintake();
            whoTookLast = "Goblin";
            update(a);
        }
    }
    if(a == 3){
        pile3--;
        update(a);
        whoTookLast = "Player";
        if(!pile3Gone){
            pile3 -= goblintake();
            whoTookLast = "Goblin";
            update(a);
        }
    }
    if(pile1Gone && pile2Gone && pile3Gone){
        end();
    }
}

function goblintake(){
    num = parseInt(Math.random() * 2) + 1
    console.log(num)
    return num; 
}

function update(a){
    if(pile1 <= 0){
        button1.disabled = true;
        pile1Gone = true;
    }
    if(pile2 <= 0){
        button2.disabled = true;
        pile2Gone = true;
    }
    if(pile3 <= 0){
        button3.disabled = true;
        pile3Gone = true;
    }
}

function end(){
    if(whoTookLast === "Player"){
        winText.style.display="block";
        winText.innerHTML = "You took the last rock! You lose!";
    }
    if(whoTookLast === "Goblin"){
        winText.style.display="block";
        winText.innerHTML = "The goblin took the last rock! You win!";
    }
}

function resetPiles(){
    initialize();
    button3.disabled = false;
    button2.disabled = false;
    button1.disabled = false;
    winText.style.display="none";
}

