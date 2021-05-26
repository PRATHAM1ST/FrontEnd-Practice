var scores, roundScore, activePlayer, gamePlaying, diceOne, diceTwo, finalScore;


function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('#dice-1').style.display = 'none'; // change the css style and transform the design
    document.querySelector('#dice-2').style.display = 'none'; // change the css style and transform the design

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";

    document.querySelector('.player-' + 0 + '-panel').classList.remove('winner');
    document.querySelector('.player-' + 1 + '-panel').classList.remove('winner');
    document.querySelector('.player-' + 0 + '-panel').classList.add('active');
    document.querySelector('.player-' + 1 + '-panel').classList.remove('active');

    console.log(document.querySelector('.final-score').textContent);


}

function diceRoll(){
    return Math.floor(Math.random() * 6) + 1
}


init();

// document.querySelector('#current-' + activePlayer).textContent = dice; // get content displayed from html and change it
//document.querySelector('# id' + anything you want).innerHTML = '<em>' + dice + '</em>' ;   <em> is for italic font

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        // random number
        diceOne = diceRoll();
        diceTwo = diceRoll();
        console.log(diceOne, diceTwo);

        // display in number
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-2').style.display = 'block';
        document.querySelector('#dice-1').src = 'dice-' + diceOne + '.png';
        document.querySelector('#dice-2').src = 'dice-' + diceTwo + '.png';

        //update the round score if the rolled no. is not 1
        if (diceOne !== 1 && diceTwo !== 1){
            // add score
            roundScore += diceOne + diceTwo;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else if (diceOne === 6 && diceTwo === 6){
            nextPlayer();
        }
        else{
            nextPlayer();
        }

    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        // add current score to global score
        scores[activePlayer] += roundScore;

        // update ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        finalScore = document.querySelector('.final-score').value;

        if (finalScore === false){
            finalScore = 100;
        }

        console.log(finalScore);

        // check if player won the game
        if (scores[activePlayer] >= finalScore){
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        }
        else{
         // next player
             nextPlayer();
        }
    }
});

function nextPlayer(){
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

         // down one is the same
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);



















