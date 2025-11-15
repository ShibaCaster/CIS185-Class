const canvas =  document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

const startBtn = document.getElementById("startBtn");
const pokemonSelect = document.getElementById("pokemonSelect");
const timerDisplay = document.getElementById("timer");

let pokemonImg = new Image();
let pokemonList = [];
let spawnRate = 2000;
let gameInterval;
let spawnInterval;
let countdownInterval;
let timeLeft = 180;

// FULL POKEDEX ARRAY (1-151 for Simplicity)
const pokedex = Array.from({ length: 151}, (_, i) => ({
    id: i + 1,
    name: `Pokemon ${i + 1}`,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
}));

// Populate dropdown
pokedex.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.sprite;
    opt.textContent = p.name;
    pokemonSelect.appendChild(opt);
});

pokemonImg.src = pokemonSelect.value;
pokemonImg.onload = () => console.log("Loaded Initial Pokemon");

pokemonSelect.addEventListener("change", () => {
    pokemonImg = new Image();
    pokemonImg.src = pokemonSelect.value;
});

startBtn.addEventListener("click", startGame);

function startGame() {
    pokemonList = [];
    spawnRate = 2000;
    timeLeft = 180;

    updateTimerDisplay();
    clearInterval(gameInterval);
    clearInterval(spawnInterval);
    clearInterval(countdownInterval);

    countdownInterval = setInterval(updateCountdown, 1000);
    spawnInterval = setInterval(spawnPokemon, spawnRate);
    gameInterval = setInterval(gameLoop, 1000 / 60);
}

function updateCountdown() {
    if (timeLeft <= 0) {
        endGame(true);
        return; //Stop further countdown
    }

    timeLeft--;
    updateTimerDisplay();

    if (timeLeft % 20 === 0 && spawnRate > 400) {
        spawnRate -= 200;
        clearInterval(spawnInterval);
        spawnInterval = setInterval(spawnPokemon, spawnRate);
    }

    if (timeLeft <= 0) endGame(true);
}

function updateTimerDisplay() {
    let m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    let s = String(timeLeft % 60).padStart(2, "0");
    timerDisplay.textContent = `${m}:${s}`;
}

// MOBILE TOUCH + DESKTOP CLICK
touchOrClick(canvas, (x, y) => {
    pokemonList = pokemonList.filter(p => {
        return !(x >= p.x && x <= p.x + 40 && y >= p.y && y<= p.y + 40);
    });
});

function touchOrClick(element, handler) {
    function getPos(e) {
        const rect = element.getBoundingClientRect();
        let x, y;
        if (e.touches) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }
        handler(x, y);
    }

    element.addEventListener("click",getPos);
    element.addEventListener("touchstart", getPos);
}

function spawnPokemon() {
    pokemonList.push({
        x: Math.random() * (canvas.width - 40),
        y: Math.random() * (canvas.height - 40)
    });
}

function gameLoop() {
    if (window.gameEnded) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pokemonList.forEach(p => {
        ctx.drawImage(pokemonImg, p.x, p.y, 40, 40);
    });

    if (pokemonList.length > 151) {
        endGame(false);
        return;
    }
}

function endGame(win) {
    clearInterval(gameInterval);
    clearInterval(spawnInterval);
    clearInterval(countdownInterval);


    // Prevent multiple alerts if function is called again
    if (!window.gameEnded) {
        window.gameEnded = true;
        alert(win ? "You survived!" : "Your Browser crashed!");
    }
}
    