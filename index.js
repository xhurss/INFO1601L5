
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}
let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`)


console.log('1' == 1); 
console.log(1 == true); 
console.log("false" == false); 
console.log("false" == true); 

if("false")
 console.log("Hello false!") 

console.log('1' === 1); 
console.log(1 === true); 
console.log("true" === true); 

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ 
    console.log('fizzbuzz');
      }
  else if(i%3 === 0){ 
    console.log('fizz');
      }
  else if(i%5 === 0){ 
  console.log('buzz');
     }
  else{             
    console.log(i);
  }



  function printDate(){
   console.log(Date().toLocaleTimeString());
}
      
setInterval(printDate, 1000);



let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));//true

arr.push(11);//adds item to the end

console.log(arr);//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem == arr.pop();//removes last item

console.log(lastItem, arr);//11, [ -5, 16, 33, 42, 103, 344]

arr.unshift(22);//adds item to the front

console.log(arr);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr.shift();//removes first item
console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]
console.log(arr.join('-'));//"-5-103-16-33-344-42" joins array with provided separator



let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                

function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(num){
  return element%2 !== 0; 
}

let odds = arr.filter(isOdd);
console.log(odds);


function has5Factor(){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}


let ascending = arr.sort(intCompare)
console.log(ascending);

*/

{
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
   
    sum += calcBMI(person.weight, person.height);
  }
 
  return sum / people.length;
}


let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));
}

