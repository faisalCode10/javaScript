// Object 


// Premitive data type -> Store single type of data 
// Number
// String 
// Boolean
// undefined
// null 

// Refrence  Data type  => store multiple types of data 
// Array 
// Object  => store value in the form of key value pair 
// Function 


let stdData ={
    name: "Faisal",
    age:21,
    isgraduate:false,
    cgpa :3.1
}

// console.log(stdData)


let user1 ={
    name:"saif",
    age:24,
    university:"uos"
}

// console.log(user1)

// Accessing user
// console.log(user1.name)
// console.log(user1.age)
// console.log(user1.university)

let user2 ={
    name:"Roman",
    age:21,
    semester:8,
    uni:"UOS"
}

// console.log(user2)
// console.log(user1.name)
// console.log(user2.uni)


let user ={
    name:"Sushant",
    age:20,

    sayName: function(){
        console.log("Hey", this.name )
    },
    add: function(a,b){
        console.log(a+b)
    }
}

user.sayName()
// user.add(2,3)
// user.add(2,9)

// Everything in a javascript is eventually an object 
// A function inside a object is known as method


const car = {
    type:"Fiat",
    model:500,
    color:"White"
}

// The value are written as name:value pair(name and value separated by a colon)

console.log(car)


// Print on console "Jhon is 50 years old"

const person ={
    firstName : "jhon",
    lastName:'Doe',
    age:50,
    eyeColor:"blue",
    fullName: function(){
        return this.firstName + " "+ this.lastName
    },
    car: function(){
        console.log(car.type)
        console.log(car.model)
    }
}

console.log(person.firstName, "is", person.age, "years old")

console.log(person.fullName())
person.car()


// What is this keyword:
// In js this keyword refer to an object 
// Which object depends on how this is being innvoked (use or called)

/* 
1:  In an object method, this refers to the object 
2: Alone, this refers to the global object
3: in a function, this refers to the global object
4: in a function, in strict mode this is undefined 
: in an event, this refers to the element that recived the event 
*/
