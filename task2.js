//  Data types
// Task-1
let name="Bhargavi"
console.log(name)

// task-2
let js="JavaScript"
console.log(typeof(js))

// task-3
let age=22
console.log(typeof(age))

// task-4
let isStudent=true
console.log(typeof(isStudent))

// task-5
let salary 
console.log(salary)     
// here we declared aa variable but we didn't given value so it shows undefined



// Array tasks 
// task-6
 let fruits=["apple","banana","cherry","dragon","grapes"]
 console.log(fruits)

//  task-7
console.log(fruits[0])  
// here indexs are starts from 0 zero so for the frst element we have been taken 0

// task-8
console.log(fruits[2])
// similarily here also we follow the same count indexes start from 0

// task-9
console.log(fruits[fruits.length-1])
// here for countable values we can take last element directly for large it will hard so ,in that case we can use this 

// task-10
let numbers=[10,20,30,40,50]
console.log(numbers[1],numbers[3])

// Objective Tasks
// task-11
let person={
    name:"Bhargavi",
    age:22,
    city:"hyderabad"
}
console.log(person)

// task-12
console.log(person.name)
// here as person we need to print take name of the person

// task-13
person.skills = ["HTML", "CSS","JS"];
console.log(person)
// here we can check whether skills are added to the object or not 
console.log(person.skills[1])
// here we are printing second skill in the given skill from a person

// task-14
let carDetails={
    brand:"Kia",
    model:"Seltos",
    price:"13.3 lakhs approx"
}

console.log(carDetails.brand)

// task-15
let fruitcategory={
    red:["apple","cherry"],
    yellow:["banana","mango"],
    green:["kiwi","grapes"]
}

console.log(fruitcategory.yellow[0])
// here we are talking frst element so we used 0

// arithmetic operator
// task-16
let a=8
let b=4
console.log(a+b)
// addition

// task-17
console.log(a-b)
// subtraction takes place here

// task-18
console.log(a*b)
// product of a and b 

// task-19
console.log(a/b)
// division of a and b

// task-20
console.log(a%b)
// remainder of a and b


// Exponential operator
// task-21
console.log(3**2)
// here 3 to the power 2 will be takes place so here it returns 9

// task-22
console.log(2**4)
// here 2 to the power of 4 will takes place 


// increment/decrement
// task-23
let num=5
console.log(num++)
// this is example for post increament 

// task-24
let num1=10
console.log(num1--)
// this is the example for post decrement

// task-25
let x=6   // x=6
let y=x++    //y gets 6, then x becomes 7
console.log(x,y)

// task-26
let i=4 //i=4
let j=++i  //i gets 5 ,and the j gets 5
console.log(i,j)

// assignment operators
// task-27
let value=10
value += 5 //addition will takes place
console.log(value)

// task-28
let value1 = 20
value1 -= 3 //subtraction takes place here 
console.log(value1)

// task-29
let value2 = 6
value2 *= 2  //multiplication
console.log(value2)

// task-30
let value3 = 20
value3 %= 3 //remainder of the division
console.log(value3)

// Comparison Operators
// task-31
console.log(10 == "10")  //== checks only the value so it returns true

// task-32
console.log(10==="10") //=== it checks both the value and data type so it returns false


// task-33
console.log(15>20) //15 is not greater 20 so it returns false

// task-34
console.log(5<=5)  //it will true because 5=5

// Logical Operators
// task-35
console.log(10 > 5 && 5 > 2)   //here both are true so result return true

// task-36
console.log(10 < 5 || 8 > 2)  //here frst statemwnt is false and second one is true so here we taken or condition so it returns true

// task-37
console.log(!(5 === "5"))

//Ternary operator
//task-38
let age1=20
console.log(age1 >= 18 ? "Adult" : "Minor");

//task-39
let password = 1;
console.log(password === 1 ? "Login success" : "Wrong password");

//task-40
let firstName = "Spider"
let lastName = "Man"
console.log(firstName + " " + lastName) //Using Concatenation
console.log(`${firstName} ${lastName}`)  //Using Template String