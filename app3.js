///create a class alienship
class AlienShip{
    constructor(name, hull, firePower, accuracy ){
        this.name = name;
        this.hull = this.randomHull(3, 6);
        this.firePower = this.randomFirepower(2, 4);
        this.accuracy =this.randomAccuracy(); 
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
/// instantiate the objects for alienship class
const alienShip1 = new AlienShip('A-sh1');
const alienShip2 = new AlienShip('A-sh2');
const alienShip3 = new AlienShip('A-sh3');
const alienShip4 = new AlienShip('A-sh4');
const alienShip5 = new AlienShip('A-sh5');
const alienShip6 = new AlienShip('A-sh6');
////instantiate the array of objects.
const alienShips = new Array(alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6);
console.log(alienShips);

///create the class uss assembly
class USSAssemblyShip{
    constructor(name, hull, firePower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
}
const ussAssemblyShip1 = new USSAssemblyShip('mission123', 20, 5, 0.7);
console.log(ussAssemblyShip1);
