// Loops = repeat 

// Example 1: 1,2,3,4,5,6,7,8
// Example 2: 1,1,1,1,1,1,1,1


// for(start; end; change ){}
// Loop humesha question dekh kar create hota hai, Kabhi bhi andhe mei loop create nahi karte

for (var i=1; i<=10; i++){
    // console.log('2 X' ,i ,'=', i*2)
}

// ForEach => ForEach sref tab use hoga jab humare pass aik array hoga 
// ForEach loop array ke har member par aik baar chalta hai 


var arr = [1,2,3,4,5,6,7]

arr.forEach((val)=>{
    // console.log(val) 
})


// For-In Loop => ForIn loop is all about looping through the key of object 


// Map=> map ka matab array ke ek ek number par koi calculation karo and uska answer save karo ek nayi array mein 
// Map ka use mainly tab hota hai jab aapko eik array me koi calculation karne ho aur unka result and answer save karna ho ek nayi array me 

let arr1 = [1,2,3,4,5,6,7];

var newArr= arr1.map((val)=>{
    return val + 2
})
// console.log(arr1)
// console.log(newArr)



// Diffrence between map() and forEacah()
// ForEach me aap ek ek baar element par jate hu aur wo koi naya array default mei nahi banata, naa hi aapko force karta hai return karne ke liye, jabke map does both the things 


// Filter=> jab bhi array hota hai and aapko uske har member par jana hai and uske kisi member ko hume place karna hai nayi array mei aur kisi ko nahi , waha par filter aata hai 


let array = [1,2,4,5,6,7,9,6,76,6,6,78,4,645,45]

let answer = array.filter((val)=>{
        return val > 8
})

// console.log(answer)
// Sum of an array:
let sum = [12,34,56,78,89]
let a = 0;

sum.forEach(element => {
    // a +=element
    // a = a + element
});

// console.log(a)

// Reduce in js : 
// jo bhi aapka array hai ussko hum reduce karke kisi 1 value ke lekar andar leke aaskte hu 
// Reduce the whole array into a single value 
// used for iteration 
// take 2 value accumlator and current value
// accumalator is the value that store a value at a particular time 
// i.e if curr value is 2 then accumaltor is 1 and if the value is 3 and you give some instruction inthe fntn body then accumaltor value change accordingly 



let red = [1,2,3,4,5]

let ans = red.reduce((acc, curr)=>{
    return acc + curr
},0 /* this 0 is the initial value of accumaltor*/) 
console.log(ans)
