
const start = document.querySelector(".start")
const retreat = document.querySelector(".retreat");
let humanHull = document.getElementById("hull1");
let enemyHull = document.getElementById("hull2");

class Ship {
    constructor() {
        this.hull = 1;
        this.firepower = 1;
        this.accuracy = 0.1;
    }
    attack(otherShip) {
        if (this.hull > 0 && otherShip.hull > 0) {
            if (Math.random() < this.accuracy) {
                alert("attack sucessful")
                otherShip.hull = otherShip.hull - this.firepower;

            } else {
                alert("attack not sucessful")
            }
        }
    }

}

class HumanShip extends Ship {
    constructor() {
        super();
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
    //  retreat(){

    //  }

}
class AlienShip extends Ship {
    constructor() {
        super();
        this.hull = Math.floor(Math.random() * 5) + 5;
        this.firePower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.floor(Math.random() * 3) + 6 / 10;

    }
}
/*Battle - requires human and Aliens
  -While either the human or alien ship still has hitpoints, human attacks alien, then alien attacks human.
  -When an alien is destroyed, check if another alien exists. if not, the human wins.
  -if another alien exists, place them in battle, repeat battle */
class Game {
    constructor() {
        this.humanShip = new HumanShip();
        this.enemyShips = [];
    }
    
    gameSetup() {
        for (let i = 0; i < 6; i++) {
            this.enemyShips[i] = new AlienShip();
        }
    }
    startBattle() {
        while ((this.checkIfHumanIsAlive()) && (this.checkIfAlienIsAlive())) {
            alert("Human ship attacks");
            this.humanShip.attack(this.enemyShips[0]);
            enemyHull.innerHTML = this.hull;
            //enemyHull.setAttribute(hull, this.hull);


            alert(`Alien has ${this.enemyShips[0].hull} left`);

            alert("Alien ship attacks")
            this.enemyShips[0].attack(this.humanShip);
            alert(`Human has ${this.humanShip.hull} left`);

        }

        if (this.checkIfAlienIsAlive() == false) {
            alert("An alien has been defeated");
        } else if (this.checkIfHumanIsAlive() == false) {
            alert("Human has been defeated");
        }

    }
    checkIfAlienIsAlive() {
        if (this.enemyShips[0].hull > 0) {
            return true;
        } else {
            return false;
        }
    }
    checkIfHumanIsAlive() {
        if (this.humanShip.hull > 0) {
            return true;
        } else {
            return false;
        }

    }
    checkIfHumanWins() {
        if (!this.enemyShips[0]) {
            alert(`Human wins !!`);

        }
    }
    sendOutNextAlien() {
        this.enemyShips.shift();
    }
}

let game = new Game();
start.addEventListener("click", function(){
    game.gameSetup() 
    game.startBattle()

});










