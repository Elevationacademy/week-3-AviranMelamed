class vechile {
    constructor(x, y, speed, fuel){
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = fuel
        vechile.carSold++
        
    }
    set fuel(fuel) {
        if (fuel < 0 || fuel > 150) {
           return console.log("The fuel is to much or to low") 
        }
        this._fuel = fuel
    }
        get fuel(){
            return this._fuel
        }

    
    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    get speed(){
        return this._speed
    }
    

    
      static getInfo() {
          console.log("We've sold " + vechile.carSold + " vehicles.");
      }
      static calculateMoney(){
          console.log("Cars value is " + vechile.carSold * 30000 + " Dollars")
      }
              
}
vechile.carSold = 0;

const car = new vechile("2", "3", "5")
const Traktor = new vechile("2", "3", "5")

vechile.getInfo()
vechile.calculateMoney()

const c = new vechile
c.x = 3
c.y = 1
c.speed = 10 // at this point, we'll get the console log saying speed needs to be positive
c.fuel = - 2
console.log(c.speed) // prints undefined
console.log(c.fuel)




// Instantiate a dog instance of Animal. You decide on the name and whether it's 
// paraplegic or not. Console log the dog's name to make sure it worked.

