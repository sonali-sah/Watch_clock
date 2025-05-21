//console.log("sonali");


/*Veriable
let x; //now x is undefine
x=5; // now x is number
x="sonali" // now x is string
// typeof-oprater
console.log(typeof(x));
*/


/*Oprator

//Arithmatic operator
let a= 10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Assignment oprator 
let x=10;
let sum=20;
// sum = sum + x;
sum += x;
console.log(sum);

//Comparison Operator
let x= 10;
let check = x == "10"
console.log(check);

//Logical Operator

//Ternary Operator
const result = (marks >= 40) ? ("pass"),("faill");
//Template literal
const name = "soni";
const id = "0128cs1";
const greeting = `hello, my name is ${name} and my id ${id}`;
console.log(greeting);
*/

/*Condition
 //If Condition
 let greeting;
 if(hour==9)
 greeting="Good morning";


// If else Condition
let greeting;
if(hour==9)
{greeting="Good morning";}
else
{greeting="Good morning";}

//else-if Statements
if(experience<1){
console.log("Fresher Dev");
}else if(experience>2){
console.log("Senior Dev");
}else{
console.log("Berozgaar")
}


//Switch Statements
let day = 1;
switch(day){
    case 0:
        console.log("Sunday");
        break;
        case 1:
            console.log("Monday");
            break;
            case 2: 
            console.log("Tuesday");
            break;
            case 3: 
            console.log("Wednesday");
            break;
            case 4: 
            console.log("Thrusday");
            break; 
            case 5: 
            console.log("Frieday");
            break; 
            case 6: 
            console.log("satarday");
            break;         

}
 */


/*Loop
/////////////////////////////////////////////intialization,condition,updation//////////////////////////////
//For
for(let i = 0; i<5; i++){
    console.log("sonali coder",i);
}
let n=20;
for(let i =1; i<=10; i++){
    console.log(`${n} X ${i} =`,n*i);;
}

//While loop
let i=0;
while(i <= 10){
    console.log(i);
    i++
}

//do while loop
let i=0;
do{
    console.log(i);
    i++;
}while(i<5)

*/


/*Function
// function print(){
//     console.log("sonali")
// }
// print()
// print()
// print()

// function sum(a,b){ // function declaration
//     console.log(a+b);
// }
// sum(10,20) // calling function
// sum(100,23)
// sum(22,20)

// function sum(a,b){
//     return a+b
// }
// let result = sum(23,20);
// console.log(result);

// function greet(name){
//     return `hello ${name}`
// }
// let result = greet("sonali");
// console.log(result)

////////////////Arrow Function//////////////////////////////////

// let print = () => console.log("sonali");
// print()

let sum = (a,b) => {
    console.log("suraj");
    return a+b;
};
console.log(sum(10,12));
  
/////// function scop.........////////////////////////
/////////globle scop///////
let globleVar = 10;
let display = () => {
    console.log('inside the display fun');
    console.log( 'inside the function',globleVar)
}
display();
console.log(globleVar)

////////////////////////Local scop//////////
let display = () => {
    let globleVar = 10;
    console.log('inside the display fun');
    console.log( 'inside the function',globleVar)
}
display();
console.log(globleVar)

//////////////Block scop/////////
if(true){
    let blockVar = 10;
    console.log(blockVar)
}
console.log(blockVar)

/////////////////////////////////////////CALL BACK FUNCTION//////////////////////////////
const print = () =>{
    console.log("printing press");
}
const print2 = () =>{
    console.log("printing print 2")
}

const test = (name,callBack) =>{
    console.log("inside the test function",name);
    callBack();
}
test('suman',print2);
*/


/*Objects
const personn = {
    name: "monali",
    age: 300,
    phoneNo: 765987864,
};
const smartPhone = {
    name: "iphone-16",
    Price: 7500000,
    camera: "5000 MAH",
    battery: "5000 MAH",
    ram: "4 GB",
    rom: "64GB",
};
console.log(smartPhone)
console.log(personn)

const person = {
    name: "Sonali",
    age: 25,
    greet: function () {
        return `Hello, my name is ${this.name} `;
    },
};
console.log(person.name);
console.log(person.greet());

///////////////////////////////////////Spread Operator(...)
const smartPhone1 = {
    name: "iphone-16",
    Price: 7500000,
    camera: "5000 MAH",
    battery: "5000 MAH",
    ram: "4 GB",
    rom: "64GB",
};

// const smartPhone2 = {
//     name: "Galaxy s24 ultra",
//     Price: 7500000,
//     camera: "128 MP",
//     battery: "5000 MAH",
//     ram: "10 GB",
//     rom: "64GB",
// };
 const smartPhone2 = { ...smartPhone1}; // copy or clone make use in Spread Operatoe
console.log(smartPhone2);
*/ 



/*Destructure
const smartPhone1 = {
    name: "iphone-16",
    Price: 7500000,
    camera: "5000 MAH",
    battery: "5000 MAH",
    ram: "4 GB",
    rom: "64GB",
};

// console.log(smartPhone1.name, smartPhone1.Price, smartPhone1.rom)
const {name,Price,rom} = smartPhone1;
console.log(name,Price,rom)
*/


/*Array
let arr = ["suman", 100, 30.2, "@"];
let number = ['ram',10,20,30,40,50];
// console.log(number[0]);
// console.log(number[4]);
for(let i=0; i<number.length; i++){
    console.log(number[i]);
}

///////////////////////////////////push,pop,shift,unshift,lengh/////////////////////////////////
let arr = [10,20,30,40];
// arr.push(50)
// arr.pop()
// arr.shift()
// arr.unshift(5)
console.log(arr.length);

///////////////////////////////////find,include,concat,join,splice,slice,short,findIndex,from,isArray
// let arr = [10,20,30,40];
// let found = arr.find((suman) => suman>20)
// console.log(found);
// console.log(arr.includes(50));
// let arr1 = [10,20];
// let arr2 = [30,40];
// let merged = arr1.concat(arr2);
// console.log(merged);

// let arr = ['sonali', 'wdm', 'web_dev_Mastery']
// let result = arr.join(", ");
// console.log(result);

// let arr = [10,20,30,40,50];
// let element = arr.splice(1,2,'a')
// let slice = arr.slice(1,3);
// console.log(arr.sort((a,b) => a-b));
// console.log(arr.findIndex((el) => el>20));

// let str = "webdevmastery"
// let arr = Array.from(str);
// console.log(arr);

let arr = [10,20,30]
let str = "suman"
let n = 10
console.log(Array.isArray(arr));
console.log(Array.isArray(str));
console.log(Array.isArray(n));

*/


/*High Order Array Method's
//////////////////////////////////map, filter, reduce /////////////////////
map
// let arr = [1,2,3,4,5,6];
// let result = arr.map((e) =>e*3);
// console.log(result);

filter
// let arr = [1,2,3,4,5,6];
// let result = arr.filter((el) => el % 2 === 0); // condition checker
// console.log(result)

reduce
// let arr = [1,2,3,4];
// let sum = arr.reduce((prev,el) =>prev+el, 0);
// console.log(sum)
*/


/*Advance Loop
/////////////////for...in loop
const phone = {
    brand:'iphone',
    model:'ipphone-16',
    price:75000,
    camera:'20 MP',
    ram:'2 GB',
    rom:'16 GB'
}
for(let key in phone){
    console.log(key, phone[key]);
}

/////////////////for of loop

 let arr = [1,2,3,4,5];
 for(let value of arr){
    console.log(value)
 }

/////////////////for each loop
let arr = [10,20,30];
arr.forEach((value,index,arr) =>{
    console.log(value,index,arr)
})
*/


/*String
let str1 = " sonali ";
let str2 = 'sonali dev mastery';

console.log(str2);
/////lenght
console.log(str1.length);
////lowerCase
console.log(str1.toLocaleLowerCase());
////UpperCase
console.log(str1.toLocaleUpperCase());
////includes
console.log(str1.includes('A'));
/////indexOf
console.log(str1.indexOf('m'));
/////trim
console.log(str1.trim());

/////substring
let str = 'best javascript mastery course on youtub';
let substring = str.substring(5,17);
console.log(substring)

/////slice
let str = 'best javascript mastery course on youtub';
console.log(str.slice(0,4))

/////Replace
let str = 'best javascript mastery course on youtub';
console.log(str.replace('best','BEST'));
console.log(str);

/////split
let result = str.split(" ");
console.log(result);

//////charAt
console.log(str.charAt(10));
*/



/*Date& Time
let currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDay());
console.log(currentDate.getDate());


/////////////////////////////setInterval()
setInterval(() => {
    console.log('suraj and sonali')
}, 1000);


/////////////////////////setTimeout()
setTimeout(() => {
    console.log('this is example of setTimeout')
}, 2000);

*/



/*Sync and Async js

///////////////////////----------Synchronous(sync)-----------/////////
//line-by-run that's called sync
console.log("start 1");
console.log("start 2");
console.log("start 3");

//////////////////--------------Asynchronous(async)------------//////////
console.log('ram');
setTimeout(() => {
    console.log('syama');
}, 2000);
console.log('thank u');

*/