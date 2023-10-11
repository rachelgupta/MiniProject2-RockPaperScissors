let scores = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};
updateScore();
function check(y) {
    let yours = '';
    let result = '';
    const r = Math.floor((Math.random() * 3));
    if (r == 0) {
        comp = 'Rock';
        if (y == 0) {
            yours = 'Rock';
            result = 'Tie';
        }
        else if (y == 1) {
            yours = 'Paper';
            result = 'You win';
        }
        else {
            yours = 'Scissors';
            result = 'You lose';
        }
    }
    else if (r == 1) {
        comp = 'Paper';
        if (y == 0) {
            yours = 'Rock';
            result = 'You lose';
        }
        else if (y == 1) {
            yours = 'Paper';
            result = 'Tie';
        }
        else {
            yours = 'Scissors';
            result = 'You win';
        }
    }
    else {
        comp = 'Scissors';
        if (y == 0) {
            yours = 'Rock';
            result = 'You win';
        }
        else if (y == 1) {
            yours = 'Paper';
            result = 'You lose';
        }
        else {
            yours = 'Scissors';
            result = 'Tie';
        }
    }
    if (result === 'You win') {
        scores.win += 1;
    }
    else if (result === 'You lose') {
        scores.lose += 1;
    }
    else {
        scores.tie += 1;
    }
    localStorage.setItem('score', JSON.stringify(scores));
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-show').innerHTML = `You
        <img src="images/${yours}.png" class="imageStyle">
        <img src = "images/${comp}.png" class="imageStyle">Computer`;
    updateScore();
}
function updateScore() {
    document.querySelector('.js-scores').innerHTML = ` Win = ${scores.win}, Lose = ${scores.lose}, Ties = ${scores.tie}`;
}