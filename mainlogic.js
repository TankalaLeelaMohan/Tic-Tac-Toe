let winningpatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let boxes= document.querySelectorAll(".btn");
let rstbtn= document.querySelector(".rstbtn");
let newgamebtn=document.querySelector(".newgamebtn");
let TurnX= true;

for(let i=0;i<boxes.length;i++)
{
    boxes[i].addEventListener("click",() => {
        if(TurnX)
        {
            boxes[i].innerText="X";
            document.querySelector(".pbtnX").classList.remove("currplayercolor");
            document.querySelector(".pbtnO").classList.add("currplayercolor");
            TurnX= false;
        }
        else
        {
            boxes[i].innerText="O";
            document.querySelector(".pbtnX").classList.add("currplayercolor");
            document.querySelector(".pbtnO").classList.remove("currplayercolor");
            TurnX= true;
        }
        boxes[i].disabled= true;
        checkwinner();
    })
}

rstbtn.addEventListener("click",reset);
newgamebtn.addEventListener("click", reset);

function checkwinner(){
    for(let i=0;i<winningpatterns.length;i++){
        let a=winningpatterns[i][0];
        let b=winningpatterns[i][1];
        let c=winningpatterns[i][2];
        if(boxes[a].innerText!="" && boxes[b].innerText!= "" && boxes[c].innerText!=""){
            if(boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText)
                {
                    document.querySelector(".winner").innerText=
                    `Congaratulations \n Winner is ${boxes[a].innerText}`;
                    document.querySelector(".winner").classList.remove("hide");
                    document.querySelector(".newgamebtn").classList.remove("hide");
                    disableallbuttons();
                }
        }
    }
}

function disableallbuttons(){
    for(let i=0;i<boxes.length;i++)
        boxes[i].disabled= true;
}

function reset(){
    TurnX= true;
    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].disabled= false;
        boxes[i].innerText="";
    }
    document.querySelector(".winner").classList.add("hide");
    document.querySelector(".newgamebtn").classList.add("hide");
    document.querySelector(".pbtnX").classList.add("currplayercolor");
    document.querySelector(".pbtnO").classList.remove("currplayercolor");
}






