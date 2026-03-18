let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
// box.innerText = turnO ? "O" : "X";
// box.classList.add(turnO ? "O" : "X");





const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.classList.add("O")
            turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("X")
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner =()=>{
    for (let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!=""  && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                boxes[pattern[0]].classList.add("winner");
                boxes[pattern[1]].classList.add("winner");
                boxes[pattern[2]].classList.add("winner");
                showWinner(pos1);
            }
        }

    }
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

let clickSound = new Audio("click.mp3");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        clickSound.play();
    });
});