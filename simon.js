let gameseq = []
let userseq = []
let start = false
let level = 0
let h2 = document.querySelector("h2")
let btns = ["red", "yellow", "green", "purple"]

document.addEventListener("keypress", function () {
    // console.log("Game started");
    if (start == false) {
        console.log("Started")
        start == true
        levelup()
    }
})

function gameflash(btn) {
    btn.classList.add("gameflash")
    setTimeout(function () {
        btn.classList.remove("gameflash")
    }, 200)
}
function userflash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 200)
}
function levelup() {
    userseq=[]
    level++;
    h2.innerText = ` level ${level}`
    // random btn choose
    let randindex = Math.floor(Math.random() * 3)
    let randcol = btns[randindex]
    // console.log(randindex)
    // console.log(randcol)
    let randbtn = document.querySelector(`.${randcol}`)
    gameseq.push(randcol)
    console.log(gameseq)
    gameflash(randbtn)
}
function check(idx){
    // console.log("curr level :" ,level)
    // let idx=level-1
    if(userseq[idx]==gameseq[idx]){
        // console.log("same value")
        if(userseq.length==gameseq.length){
            
            setTimeout(levelup,1000)
        }
    } 
    else{ 
        h2.innerHTML=`Game over score is <b>${level}</b>`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"

        },250)
        reset()
    }
}

function btnpress() {
    console.log(this)
    let btn=this;
    userflash(btn)
    let usercolor= btn.getAttribute("id")
    // console.log(usercolor)
    userseq.push(usercolor)
    check(userseq.length-1)
}
let allbtns = document.querySelectorAll(".btn")
for (bt of allbtns) {
    bt.addEventListener("click", btnpress)
}
function reset(){
    start=false
    gameseq=[]
    level=0
    userseq=[]
}