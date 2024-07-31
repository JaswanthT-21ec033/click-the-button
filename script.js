let score = 0;
let timeLeft = 10;
let timer;

document.getElementById('click-button').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
});

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft;
    } else {
        clearInterval(timer);
        document.getElementById('click-button').disabled = true;
        alert(`Game over! Your score is ${score}`);
    }
}

window.onload = () => {
    timer = setInterval(updateTimer, 1000);
};
