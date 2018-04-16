'use strict';

// Level count function
let levels = 0;

function level(count) {
    levels += count;
};


// Lives tracker
let lives = 3;

function livesCount(count) {
    lives -= count;
};


// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

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
        // Reset when colide with enemy
        if (player.x < this.x + 70 && player.x + 60 > this.x && player.y < this.y + 40 && 40 + player.y > this.y) {
            player.x = 400;
            player.y = 400;
            livesCount(1);
            if (lives === 0) {
                console.log('dead');
                // allEnemies = [];
            }
        }
    };

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

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
        if (levels === 0 && allEnemies.length === levels) {
            allEnemies.push(enemy1);
        } else if (levels === 1 && allEnemies.length === levels) {
            allEnemies.push(enemy2);
        } else if (levels === 2 && allEnemies.length === levels) {
            allEnemies.push(enemy3);
        } else if (levels === 3 && allEnemies.length === levels) {
            allEnemies.push(enemy4);
        } else if (levels === 4 && allEnemies.length === levels) {
            allEnemies.push(enemy5);
        } else if (levels === 5 && allEnemies.length === levels) {
            allEnemies.push(enemy6);
        } else if (levels === 6 && allEnemies.length === levels) {
            allEnemies.push(enemy7);
        } else if (levels === 7 && allEnemies.length === levels) {
            allEnemies.push(enemy8);
        } else if (levels === 8 && allEnemies.length === levels) {
            allEnemies.push(enemy9);
        } else if (levels === 9 && allEnemies.length === levels) {
            allEnemies.push(enemy10);
        } else if (levels === 10 && allEnemies.length === levels) {
            allEnemies.push(enemy11);
        } else if (levels === 11 && allEnemies.length === levels) {
            allEnemies.push(enemy12);
        }
    };

    // Draw the player on the screen
    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
    }
};


// All Enemyes below
const enemy1 = new Enemy(-100, 228, Math.random() * 500);
const enemy2 = new Enemy(-100, 62, Math.random() * 900);
const enemy3 = new Enemy(-100, 145, Math.random() * 850);
const enemy4 = new Enemy(-100, 228, Math.random() * 700);
const enemy5 = new Enemy(-100, 145, Math.random() * 800);
const enemy6 = new Enemy(-100, 62, Math.random() * 600);
const enemy7 = new Enemy(-100, 145, Math.random() * 720);
const enemy8 = new Enemy(-100, 228, Math.random() * 620);
const enemy9 = new Enemy(-100, 62, Math.random() * 770);
const enemy10 = new Enemy(-100, 145, Math.random() * 810);
const enemy11 = new Enemy(-100, 62, Math.random() * 740);
const enemy12 = new Enemy(-100, 228, Math.random() * 630);
let allEnemies = [];

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