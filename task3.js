
// task-1
// let input = prompt("Enter a number:")
// let num = Number(input)   // convert string to number
// let result = num + 10
// console.log(result)

// task-2
// let input=prompt("enter the number")
// let input1=prompt("enter the number")
// let num=Number(input)    string to number it converts 
// let num1=Number(input1)   string to number it converts
// let sum=num+num1
// console.log(sum)

//  task-3
// let input = prompt("Enter a value:")
// let result = Boolean(input)    
// console.log(result);    here the value depends on the input whether it is true or false


// task-4
let a="123"
let n=Number(a) // the strings converts it into the number
let result=n*5
console.log(result)

//task-5
 let x= true;
let y= false;
let num1 = Number(x);  //convert boolean to number
let num2 = Number(y);   //convert boolean to number
console.log(num1); // 1
console.log(num2); // 0


// task-6
let string=""
 let res=Boolean(string) //if we take a empty string then it returns false
 console.log(res)      //if we take string value then it returns true value


//  task-7
let b="100"
let c="50"
let n1=Number(b)
let n2=Number(c)
console.log(n1-n2)

//task-8
let p = null
let q
let r=" "
let p1=Number(p)
let q1=Number(q)
let r1=Number(r)
console.log(p1,q1,r1)

// task-9
let str="10"
let n3=20
console.log(str+n3)  //here concatination takes place

// task-10
let n4="25"
let int=Number(n4)  //convet string to number
 console.log(int>20)

//   If / Else Real-Time Tasks
// task-11
// let age=prompt("enter the your age")
// if(age>=18){     //condition for elligible for vote
//     console.log("eligible to vote")
// }

// // task-12
// let number1=prompt("enter the number")
// if(number1>0){
//     console.log("Postive number")
// }
// else{
//     console.log("Negative number")
// }

// task-13
//  let number1=prompt("enter the number")
//  if(number1%2==0){
//     console.log("even number")
//  }
//  else{
//     console.log("odd number")
//  }

// task-14
// i=prompt("enter the number")
// j=prompt("enter the number")
// k=prompt("enter the number")
// if(i>j&&i>k){
//     console.log(`${i} is a greater number`)
// }
// else if(j>i&&j>k){
//     console.log(`${j} is a greater number`)
// }
// else{
//     console.log(`${k} is a greater number`)
// }


// task-15
// i=prompt("enter the temperature :")
// if(i>35){
//     console.log("Hot day")
// }
// else if(i<20){
//     console.log("Cold day")
// }
// else{
//     console.log("Normal weather")
// }
 
// task-16
// i=prompt("enter the marks:")
// if(i>=35){
//     console.log("student passed")
// }
// else{
//     console.log("student failed")
// }

// task-17
//  username=prompt("enter the username")
//  password=prompt("enter the password")
// if(username==="bhargavi"&&password==="bharu@123"){
//     console.log("login successfully")
// }
// else {
//     console.log("username or password is invalid")
// }
 

// task-18
// year=prompt("enter the year")
// if(year%4==0){
//     console.log("leap year")
// }
// else{
//     console.log("not a leap year")
// }


// task-19
// time=prompt("enter the hour")
//  if (time >= 5 && time < 12) {

//     console.log("Morning");
// } else if (time >= 12 && time < 17) {
//     console.log("Afternoon");
// } else if (time >= 17 && time < 21) {
//     console.log("Evening");
// } else if (time >= 0 && time < 24) {
//     console.log("Night");
// } else {
//     console.log("Invalid time");
// }


// task-20
// let salary = Number(prompt("Enter your salary:"));
// let tax;
// if (salary === 50000) {
//     tax = salary * 0.20;
// } else if (salary === 30000) {
//     tax = salary * 0.10;
// } else {
//     tax = 0;
// }
// console.log("Salary:", salary);
// console.log("Tax:", tax);


// task-21
for(i=1;i<=10;i++){
    console.log(i)
}

// task-22
for ( i = 10; i >= 1; i--) {
    console.log(i);
}

// task-23
for(i=1;i<=50;i++){
    if(i%2==0){   //even number condition
        console.log(i)
    }
}

// task-24
for(i=1;i<=50;i++){
    if(i%2!=0){
        console.log(i)
    }
}

//task-25
//  let table=Number(prompt("enter the value"))
//  for ( i = 1; i <= 10; i++) {
//     console.log(table+ " x " + i + " = " + (table* i));
// }


// task-26
let sum=0
for(i=1;i<=100;i++){
    sum=sum+i
}
console.log( sum)

// task-27
// let num = Number(prompt("Enter a number:"));
// let fact = 1;

// for ( i = 1; i <= num; i++) {
//     fact = fact * i;
// }

// console.log("Factorial of " + num + " is " + fact);

// task-28
let count = 0;
for (  i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        count++;
    }
}
console.log("Count:", count);

// task-29
for(i=1;i<=10;i++){
    console.log(`square of ${i}=${i*i}`)
}

// task-30
// let num = Number(prompt("Enter a number:"));
// let reverse = 0;
// while (num > 0) {
//     let digit = num % 10;        // get last digit
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);  // remove last digit
// }
// console.log("Reversed number:", reverse);


// task-31
arr= ["apple","banana","orange"]
for (let fruit of arr) {
    console.log(fruit);
}


// task-32
let arr1 = [2, 5, 8, 11, 20];
length=arr1.length
console.log( `length is ${length}` )

// task-33
let max = arr1[0];
for (let num of arr1) {
    if (num > max) {   //comparing the each element with another element
        max = num;
    }
}
console.log("Largest number:", max);

// task-34
let sum1 = 0;
for (let num of arr1) {
    sum1+= num;
}
console.log("Sum:", sum1);

// task-35
 console.log("even numbers")
 for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}

// task-36
let person = {
    name: "John",
    age: 25,
    city: "Chennai"
};
 
for (let key in person) {
    console.log(key + " : " + person[key]);
}


// task-37
let count1 = 0;

for (let key in person) {
    count1++;
}

console.log("Total properties:", count1);

// task-38
if ("salary" in person) {
    console.log("Salary exists");
} else {
    console.log("Salary does not exist");
}


// task-39
for (let key in person) {
    console.log(person[key]); //it takes on values
}

// task-40
let employee = {
    name: "John",
    role: "Developer",
    salary: 50000,
    department: "IT"
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}

