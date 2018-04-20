'use strict';


// Global variables
const message = document.getElementById('popUp');
const levelScore = document.getElementById('level');
const enemiesScore = document.getElementById('enemies');
const livesScore = document.getElementById('lives');
let levels = 0;
let lives = 3;
let allEnemies = [];


// Level and enemies count function
function level(count) {
    levels += count;

    // Pop-up message when game is won
    if (levels === 20) {
        const popUp = `<div class="pop-up">
                        <h1>Good Game</h1>
                        <img src="images/pexels-photo-327533.jpeg" width="300px">
                        <div class="button" onclick="restart()">Play again!</div>
                        </div>`;
        message.innerHTML = popUp;
        allEnemies = [];
    }
};


// Lives tracker
function livesCount(count) {
    lives -= count;

    // Display lives icons
    livesScore.innerText = lives;
    if (lives === 3) {
        livesScore.innerHTML = `<img src="images/Heart.png" style="width: 20px; height: 30px;">
        <img src="images/Heart.png" style="width: 20px;height: 30px;">
        <img src="images/Heart.png" style="width: 20px;height: 30px;">`;
    } else if (lives === 2) {
        livesScore.innerHTML = `<img src="images/Heart.png" style="width: 20px; height: 30px;">
        <img src="images/Heart.png" style="width: 20px;height: 30px;">`;
    } else if (lives === 1) {
        livesScore.innerHTML = `<img src="images/Heart.png" style="width: 20px; height: 30px;">`;
    };

    // Pop-up message when game is lost
    if (lives === 0) {
        const popUp = `<div class="pop-up">
                        <h1>Game Over</h1>
                        <img src="images/pexels-photo-236229.jpeg" width="300px">
                        <div class="button" onclick="restart()">Play again!</div>
                        </div>`;
        message.innerHTML = popUp;
        allEnemies = [];
    }
};


// Restart button for pop-up
function restart() {
    allEnemies = [];
    message.innerHTML = '';
    player.update();
    levelScore.innerText = '0';
    livesScore.innerHTML = `<img src="images/Heart.png" style="width: 20px;height: 30px;">
    <img src="images/Heart.png" style="width: 20px;height: 30px;">
    <img src="images/Heart.png" style="width: 20px;height: 30px;">`;
    levels = 0;
    lives = 3;
    enemy1 = new Enemy(-100, 228, Math.random() * 500);
    enemy2 = new Enemy(-100, 62, Math.random() * 900);
    enemy3 = new Enemy(-100, 145, Math.random() * 850);
    enemy4 = new Enemy(-100, 228, Math.random() * 700);
    enemy5 = new Enemy(-100, 145, Math.random() * 800);
    enemy6 = new Enemy(-100, 62, Math.random() * 600);
    enemy7 = new Enemy(-100, 145, Math.random() * 720);
    enemy8 = new Enemy(-100, 228, Math.random() * 620);
    enemy9 = new Enemy(-100, 62, Math.random() * 770);
    enemy10 = new Enemy(-100, 145, Math.random() * 810);
    enemy11 = new Enemy(-100, 62, Math.random() * 740);
    enemy12 = new Enemy(-100, 228, Math.random() * 630);
};


// Enemies our player must avoid
class Enemy {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    };

    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers. 
        if (this.x < 909) {
            this.x += this.speed * dt;
        } else {
            this.x = -100;
        }

        // Reset when player colide with enemy
        if (player.x < this.x + 70 && player.x + 60 > this.x && player.y < this.y + 40 && 40 + player.y > this.y) {
            player.x = 400;
            player.y = 400;
            livesCount(1);
        }
    };

    render() {
        // Draw the enemy on the screen, required method for game
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.player = 'images/char-boy.png';
    };

    handleInput(move) {
        //Player move distance on keypress 
        if (move === 'left' && this.x > 0) {
            this.x -= 102;
        };
        if (move === 'right' && this.x < 800) {
            this.x += 102;
        };
        if (move === 'up' && this.y > 0) {
            this.y -= 83;
        };
        if (move === 'down' && this.y < 400) {
            this.y += 83;
        }
    };

    update() {
        //Reset player to start position when moved to the top
        if (this.y < 0) {
            this.x = 400;
            this.y = 400;
            level(1);
        };

        // Spawn more enemyes based on level
        // Limit the allEnemies length
        let listEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12];
        for (let i = 0; i <= levels; i++) {
            if (levels <= 11) {
                if (levels === i && allEnemies.length === levels) {
                    allEnemies.push(listEnemies[i]);
                }
            }
        }
    };


    render() {
        // Draw the player on the screen
        ctx.drawImage(Resources.get(this.player), this.x, this.y);

        // Score panel
        levelScore.innerText = levels;
        enemiesScore.innerText = allEnemies.length;
    }
};


// All Enemyes below
let enemy1 = new Enemy(-100, 228, Math.random() * 500);
let enemy2 = new Enemy(-100, 62, Math.random() * 900);
let enemy3 = new Enemy(-100, 145, Math.random() * 850);
let enemy4 = new Enemy(-100, 228, Math.random() * 700);
let enemy5 = new Enemy(-100, 145, Math.random() * 800);
let enemy6 = new Enemy(-100, 62, Math.random() * 600);
let enemy7 = new Enemy(-100, 145, Math.random() * 720);
let enemy8 = new Enemy(-100, 228, Math.random() * 620);
let enemy9 = new Enemy(-100, 62, Math.random() * 770);
let enemy10 = new Enemy(-100, 145, Math.random() * 810);
let enemy11 = new Enemy(-100, 62, Math.random() * 740);
let enemy12 = new Enemy(-100, 228, Math.random() * 630);
const player = new Player(400, 400);


// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});