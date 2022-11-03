//Make A Ship Class
class Ship {
    constructor(){
        
    }
}
// Make the Human Ship sub-class.
// class HumanShip extends Ship{
//     constructor(){

//     }
// }
// Make an Alien Ship sub-class.
class AlienShip{
    constructor(name){
        this.name = name;
        this.hull = this.randomHull(3,6)
        this.firepower = this.randomFirepower(2,4)
        this.accuracy =this.randomAccuracy()

    }
    randomHull(min, max) {
        return Math.floor(Math.random() * (max - min) + min)

    }
    randomFirepower(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomAccuracy() {
        return (Math.floor(Math.random() * 3) + 6) / 10
    }
}

// Make an instance of each class

//let humanShip1 = new Human();

let alienship1= new AlienShip('Tom');
let alienship2= new AlienShip('candy');
console.log(alienship1);
console.log(alienship2);