class Ship{
    constructor(){
        this.hull = 1;
        this.firepower = 1;
        this.accuracy = 0.1;
    }
    attack(otherShip){
        if(this.hull > 0 && otherShip.hull > 0){
        if(Math.random()< this.accuracy){
            console.log("attack sucessful")
            otherShip.hull = otherShip.hull-this.firepower;

        }else{
            console.log("attack not sucessful")
            }
        }
        }

}
        
class HumanShip extends Ship{
    constructor(){
        super();
        this.hull = 20;
        this. firepower = 5;
        this.accuracy = 0.7;
    }
    //  retreat(){

    //  }

}
class AlienShip extends Ship{
    constructor(){
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
class Game{
constructor(){
    this.humanShip = new HumanShip();
    this.enemyShips = [];
}
gameSetup(){
    for(let i=0; i<6; i++){
        this.enemyShips[i] = new AlienShip();
    }
}
    startBattle(){
        while((this.checkIfHumanIsAlive()) && (this.checkIfAlienIsAlive())){
        console.log("Human ship attacks");
        this.humanShip.attack(this.enemyShips[0]);
        console.log(`Alien has ${this.enemyShips[0].hull} left`);
        console.log("Alien ship attacks")
        this.enemyShips[0].attack(this.humanShip);
        console.log(`Human has ${this.humanShip.hull} left`);

        }
    
        if(this.checkIfAlienIsAlive() == false){
        console.log("An alien has been defeated");
        }else if (this.checkIfHumanIsAlive() == false){
        console.log("Human has been defeated");
        }
  
        }
        checkIfAlienIsAlive(){
        if(this.enemyShips[0].hull > 0){
        return true;
        }else {
        return false;
        }
        }
        checkIfHumanIsAlive(){
        if(this.humanShip.hull > 0){
        return true;
        }else{
        return false;
        }

        }
        checkIfHumanWins(){
        if( ! this.enemyShips[0]){
        console.log(`Human wins !!`);

        }
        }
        sendOutNextAlien(){
        this.enemyShips.shift();
        }
    }

let game = new Game();
    game.gameSetup();
    game.startBattle();

