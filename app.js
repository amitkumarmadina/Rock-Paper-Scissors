let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msgPara= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');


const drawGame=()=>{
    msg.innerText="Game was a DRAW.Play Again!";
    msg.style.backgroundColor="#023047";
};
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You WON! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You LOOSE! ${compChoice} beats Your ${userChoice}`;
     msg.style.backgroundColor="Red"
}
};

const genCompChoice=()=>{
//randomly generate
const option =["rock","paper","scissors"];
const radIdx=Math.floor(Math.random()*3);
 return option[radIdx];
};

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice)
    //Generate Computer Choice  
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        //draw
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissor,paper
            userWin=compChoice=="paper" ? false : true;
        }else if(userChoice=="paper"){
            //scissor,rock
            userWin=compChoice=="scissor" ? false : true;
        }else{
            //rock,paper
            userWin=compChoice=="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});