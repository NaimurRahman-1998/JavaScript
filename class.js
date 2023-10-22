class Person {                   /*  this is a template for creating and object  */
    constructor(name,age){       /*  this are the paremeters which will be used as property of the Object  */
        this.name = name;  
        this.age = age
    }

    info(){                      /* this is a method , method is  function inside an object */
        console.log(`${this.name} is ${this.age} years old`) 
    }
}

const person1 = new Person("Jon" , 25) /* creating Object named person1 using Template Class Person */
person1.info()