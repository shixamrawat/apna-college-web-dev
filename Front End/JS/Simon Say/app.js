let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];
let level=0;
let start=false;
document.addEventListener("keydown",function (){
    if(start==false){
        start=true;
        levelUp();
    }
});

let h2=document.querySelector("h2");

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randClr=btns[randIdx];
    let randBtn=document.querySelector(`.${randClr}`);
    btnFlash(randBtn);
    gameSeq.push(randClr);

}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        document.querySelector("body").classList.add("gameOver");
        setTimeout(function (){
            document.querySelector("body").classList.remove("gameOver");
        },500)
        h2.innerHTML=`Game Over Your score is <b>${level-1}</b> <br> Press any key to start again`;
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    let userClr=btn.getAttribute("id");
    userSeq.push(userClr);

    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(let btn of allBtn){
    btn.addEventListener("click",btnPress);
}

