let score = 0;
let timer;
let timeLeft = 30;

function startGame(mode) {
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("game-message").innerText = "¡Comienza a jugar!";
    
    if (mode === 'timer') {
        timeLeft = 30;
        document.getElementById("timer-container").style.display = 'block';
        timer = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                document.getElementById("game-message").innerText = "¡Se acabó el tiempo!";
            }
        }, 1000);
    } else {
        document.getElementById("timer-container").style.display = 'none';
    }
}

function increaseScore() {
    score++;
    document.getElementById("score").innerText = score;
}
