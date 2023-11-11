//JavaScript 102

const d = new Date(2023, 11, 10);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());

const number1 = 5.5;
console.log(Math.ceil(number1));
console.log(Math.floor(number1));
console.log(Math.round(number1));
console.log(Math.abs(number1));

const  numbers = [4, 2, -9, 9, 7];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));


const str1 = '1.5'
console.log(parseFloat(str1) + 1);
console.log(parseInt(str1) + 1);

const num1 = Math.trunc(4.25)
console.log(num1);

const num2 = 3.12;
console.log(Number.isInteger(num2));

const num3 = 4;
console.log(Math.pow(num3, 2));
console.log(Math.sqrt(num3));

let num4 = 15;
console.log(num4.toString(2));
console.log(num4.toString(16));
console.log(num4.toString(8));
console.log(num4.toString(10));



function format(message, callback){
    callback(message);
}
function htmlFormat(message){
    console.log(`<div>${message}</div>`);
}
function jsonFormat(message){
    console.log(`{"message: " "${message}"}`);
}

format("Welcome to JavaScript", htmlFormat);
format("Welcome to JavaScript", jsonFormat);



const car = {
    name: 'camry',
    color: 'white',
    currentSpeed: 0,
    move: function (speed) {
        this.currentSpeed = speed;
        return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`;
    },
    stop: function () {
        this.currentSpeed = 0;
        return `The ${this.name} stopped`;
    }
}

console.log(car.move(100));
console.log(car.stop());


class Car {
    static companyName = 'Toyota';
    static numberOfCars = 0;
    constructor(name, color, currentSpeed) {
        this.name = name;
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.incrementNumberOfCars();
    }

    incrementCarNumbers(){
        Car.numberOfCars++;
    }

    move(speed) {
        this.currentSpeed = speed;
        return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`;
    }
    stop() {
        this.currentSpeed = 0;
        return `The ${this.name} stopped`;
    }

}

//IIFEs
(function(n){console.log(n);})('Abdulziz');



