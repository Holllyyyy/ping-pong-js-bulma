const p1 = {
   score: 0,
   button: document.querySelector('#playerOne'),
   span: document.querySelector('#firstPlayer')
}
const p2 = {
   score: 0,
   button: document.querySelector('#playerTwo'),
   span: document.querySelector('#secondPlayer')
}

const btnReset = document.querySelector('#reset');
const select = document.querySelector('#numbers');
let winnerScore = 5;
let gameOver = false;

function updateScore(player, otherPlayers) {
   if (!gameOver) {
      player.score += 1;
      if (player.score === winnerScore) {
         gameOver = true;
         player.span.classList.add('has-text-success')
         otherPlayers.span.classList.add('has-text-danger')
         player.button.disabled = true;
         otherPlayers.button.disabled = true;

      }
      player.span.textContent = player.score;
   }
}

p1.button.addEventListener('click', function () {
   updateScore(p1, p2)
})


p2.button.addEventListener('click', function () {
   updateScore(p2, p1)
})

btnReset.addEventListener('click', reset)

select.addEventListener('change', function () {
   winnerScore = parseInt(this.value)
   reset()
})

function reset() {
   gameOver = false;
   for (let p of [p1, p2]) {
      p.score = 0;
      p.span.textContent = 0;
      p.span.classList.remove('has-text-success', 'has-text-danger')
      p.button.disabled = false
   }
}

/*


const btnLeft = document.querySelector('#playerOne');
const btnRight = document.querySelector('#playerTwo');
const btnReset = document.querySelector('#reset');

const spanLeft = document.querySelector('#firstPlayer')
const spanRight = document.querySelector('#secondPlayer')

const select=document.querySelector('#numbers');



let playerOneScore = 0;
let playerTwoScore = 0;
let winnerScore = 5;
let gameOver=false;
btnLeft.addEventListener('click', function () {
if (!gameOver){
    playerOneScore += 1;
 if (playerOneScore === winnerScore){
    gameOver=true;
    spanLeft.classList.add('has-text-success')
    spanRight.classList.add('has-text-danger')
    btnLeft.disabled=true;
    btnRight.disabled=true;

 }
    spanLeft.textContent = playerOneScore;
     }    
})


btnRight.addEventListener('click', function () {
    if (!gameOver){
        playerTwoScore += 1;
     if (playerTwoScore === winnerScore){
        gameOver=true;
        spanRight.classList.add('has-text-success')
        spanLeft.classList.add('has-text-danger')
        btnLeft.disabled=true;
        btnRight.disabled=true;
     }
        spanRight.textContent = playerTwoScore;
         }    
    })

btnReset.addEventListener('click', reset)
    function reset(){
    gameOver=false;
    playerOneScore=0;
    playerTwoScore=0;
    spanLeft.textContent=0;
    spanRight.textContent=0;
    spanRight.classList.remove('has-text-success', 'has-text-danger')
    spanLeft.classList.remove('has-text-success', 'has-text-danger')
    btnLeft.disabled=false;
    btnRight.disabled=false;
}


select.addEventListener('change', function () {

winnerScore=parseInt(this.value)
reset()
})
*/