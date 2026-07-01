/*
const date = new Date(); built in class in javascript ,dayjs is built onto it gives access to current date and time.
console.log(date);
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


const object2 = {
  a: 2,
  // b: this.a, this cannot be accessed now as the object2 is not created yet.

  function() {
    console.log(
      `${this.a} is a method to point to the object inside which this is written `,
    ); //this can be accessed inside a method of an object as by the time the method is called the object is already created.
  }, //|   |      |
}; //|   |      |
// object2.function();

function logThis(param1) {
  console.log("this is a practice function to check use of this");
  console.log(this);
  console.log(param1);
}

// logThis("haha");
// logThis.call("hehe", 90);
// logThis("lmao", 8990);

const object3 = {
  a: 5,
  method1() {
    console.log("this is a normal function using this");
    console.log(this.a);
    console.log(this);
  },

  method2: () => {
    console.log("this is an arrow function using this");
    console.log(this); //value comes undefined since this is whatever it is outisde the arrow function which in this case is undefined.
  },

  normal(param1) {
    console.log(
      "this is outside arrow function hence arrow function will use normal function's scope.",
    );
    const arrow = () => {
      console.log("this is arrow function scope");
      console.log(this);
      console.log(this.param1); //for here this is object3 since for normal this will point to object 3.
    };
    arrow();
  },
};

// object3.method1();
// object3.method2();
object3.normal("jaja");
*/

class Car {
  #brand; //private properties can only be accessed it the same class not the child class
  #model;
  speed;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = 0;
  }

  displayInfo() {
    console.log(this.#brand, this.#model);
  }

  go() {
    if (!(this.speed + 25 > 100)) {
      this.speed += 25;
    } else {
      console.log("speed limit reached");
    }
    console.log(`Speed increased ${this.speed}`);
  }

  brake() {
    if (!this.speed - 25 < 0) {
      this.speed -= 25;
    }
    console.log(`speed decreased ${this.speed}`);
  }
}

const car1 = new Car({ brand: "Toyota", model: "Corolla" });

const car2 = new Car({ brand: "Tesla", model: "Model3" });

console.log(car1.displayInfo(), car2.displayInfo());
car1.go();
car1.go();
