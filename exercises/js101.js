//JavaScript 101

let x = 25;
console.log(x);

let name = 'Abdulaziz';
let age  = 30;

console.log(typeof name);
console.log(typeof age);

let language = 'JavaScript';
let message ='Welcome to ' + language ;
console. log(message);

let colors = ['red','green','blue'];
console.log(colors);
console.log(colors[0]);
console.log(colors.includes('red'));
let poppedColor = colors.pop();
console.log(colors);
console.log(poppedColor);
colors.push('black');
colors.unshift('Car');
colors.shift();
console.log(colors);

let value=[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
console.log(value[2][2]);

let msg = 'Welcome to JavaScript';
let result = msg.split(' ');
console.log(result);
result = result.join(' ');
console.log(result);

let ageLimit = 10;
if(age < 10){
    console.log('sorry you are not old enough to play this game');
}
else{
    console.log('Welcome to the game');
}