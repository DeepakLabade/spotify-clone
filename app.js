let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let colors = ["box1", "box2", "box3", "box4"]
let allBtns = document.querySelectorAll(".box")

h3 = document.querySelector("h3");

document.addEventListener("keypress", ()=>{
    if(started == false){
        console.log("game is started")
        started = true;
    }

    levelUp();
})

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random() * 4);
    let randBox = colors[randIdx];
    let box = document.querySelector(`.${randBox}`);
    gameSeq.push(randBox);
    console.log(gameSeq);
    btnFlash(box);
}

function btnFlash(box){
    box.classList.add("flash")
    setTimeout(function() {
        box.classList.remove("flash");
    }, 150);
}

function userFlash(box){
    box.classList.add("userFlash")
    setTimeout(function() {
        box.classList.remove("userFlash");
    }, 150);
}

function btnPress() {
    let btn = this;
    console.log(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor)
    console.log(userSeq)

    checkAns(userSeq.length-1);
}
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);   
        }
    } else {
        h3.innerHTML = `game over! your score was ${level} <br> press any key to start `
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"
        }, 140);
        reset();
    }
}
 
function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}