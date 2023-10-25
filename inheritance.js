class Car {
    constructor(brand){
        this.carName = brand;
    }
    present(){
        return `I have a ${this.carName}`
    }
}

class Model extends Car{          /* class Model inherits all properties and methods of class Car */
    constructor(brand,model){
        super(brand)
        this.model = model
    }
    show(){
        return `${this.present()} , It is a ${this.model}`
    }
}

const myCar = new Model("ford", "Mustang");

console.log(myCar.show())