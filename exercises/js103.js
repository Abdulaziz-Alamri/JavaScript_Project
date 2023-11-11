const myString = 'I love JavaScript';
const regex = /JavaScript/;

let containsRegex = regex.test(myString);
console.log(containsRegex);
let containsRegex1 = myString.replace(regex, 'Kotlin');
console.log(containsRegex1);
let containsRegex2 = myString.search(/JavaScript/);
console.log(containsRegex2);

let ages = [10,20,30,40,50];
let [first,...second] = ages;
console.log(first,...second);

let firstArr = [1, 2, 3];
let secondArr = [4, 5];
let thirdArr = [...firstArr, ...secondArr];
console.log(thirdArr);

function sum(firstArr, secondArr, ...others){
    console.log(...others);
    return firstArr + secondArr;
}
console.log(sum(1, 2, 6, 80, 75))
    
let student = {
    name : 'Abdulaziz',
    age : 25
}

let {name, nickname = 'Aziz'} = student;
console.log(name, nickname);

let colors  =['white' , 'black' ,'red'];
[color] = colors;
console.log(color);