// First class functions 
// jab aap fncns ko normal variable ki value ki tarah treat karne lagte hai us function ko first class fncs kaha jata hai 
// => aap js mein function ko save kar sakte hu variables me 
// Q: Hum aisa kaise kar sakte hai ?
// Qk Js mei function hote hai first class fncn 
// Q: What is first class functions?
// Fcf hote hai aise fncn jinko aap variable ki value ki tarah treat kar sakte ho.

// We can also pass function in arguments

let abcd = function(val){
    val()
    
}


// Here we passed function in a arguments

abcd(function(){
    // document.write("faisal")
    // console.log("Faisal")


})

// constructor.js:19 Uncaught ReferenceError: val is not defined
// val()


// new KeyWord 

// ja bhi aap aik constructor function banayenge aur aapka goal hoga us constructor ke basis par uski multiple copy bannana jinko hum instance kehte hai, tab role me aayega new keyword.

// jab bhi new keyword likha jaaye aapne man mei ek blank object bana lo, ab new ke aage jo function likha hai usse chalawo aur uske andhar jaha jah this likha ho waha  waha this ke aage liki hui cheezu ko us man me banaye hue object ki property maan lene and jo value waha set hu wahi value us object mein bhi set kar dena 

function biscuitMaker(){
    this.name = "faisal";
    this.age = 24;
    this.gender = "male";
}


new biscuitMaker()


// Constructor: ek aisa fncn jiska kaam hi hai us fncn ko chala kar nayi object banana, kyki wo fnc chalte waqt new keyword ke saath chalta hai and isi wajah se wo fnc har baar ek new object bana deta hai 

function abced (){
    this.name = "khan";
    this.age=23;

}

// let ans =new abced()
// console.log(ans) 
// console.log(typeof(ans))


// function Person(first,last, age, eye){
//     this.first=first;
//     this.last = last;
//     this.age = age
//     this.eye = eye

// }

// let detail = new Person("Faisal", "khan ", 22, "brown")
// console.log(detail)
// console.log(typeof(detail))


// Adding a Method to an Object



function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    };
    this.changeEyeColor = function(eyes){
        this.eyeColor = eyes
    }
  }
// console.log(Person)
let Data = new Person("Faisal", "khan", 22, "Brown")

// console.log(Data)

Data.changeName("Bhai")
Data.changeEyeColor("Blue")

// console.log(Data) 


// normal function jis me this ka use hu and fncn ko call karte waqt new keyword ka use kare 

// why we use constructor:
// Jab humare pass aisa koi mouka hu ke aapko ek jaisi properties waale boht saare elements banane hu us waqt aap constructor use karte hu 


function biscuit(){
    this.width= 12;
    this.height = 22;
    this.color = "brown";
    this.taste = "sugary"
}

let biscuit1 = new biscuit()



function circularBtn(color){
    this.raius = 2;
    this.color = color;
    this.icon = false;
    this.presseable = true;
}

// let redbtn = new circularBtn("red")
// let greenbtn = new circularBtn("green")

// console.log(redbtn)
// console.log(greenbtn)

// First order function
// A language is said to have  first class function when the function in that langauge are treated as normal values or like variable, you can save them, you can pass them as arguments to another functions






