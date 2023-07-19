// let dulha  = "lab"
// let dulhan = " laby"

// console.log(dulha)

// dulha = "haramzada"

// let shaadi = dulha + " weds " + dulhan

// console.log(shaadi)

// var a = 12 ;
// let a = 22
// console.log(a)

// Hoisting 
// variable ko banane se pehle use karna 
// variable and functions are hoisted which means that their decalartion is moved on at the top of the code 

// console.log(a)
// var a = 12;
// // var b;
// a = b
// console.log(b)

// Types in JS 
// Mainly two types
// Primitive and refrence 

// primitive  => number string null undefined bool
// Refrernce => [], (), {}
// Aesi koi bhi value jis ko copy kaarne par real copy nahi hota balki us main value ka refrence pass hojata hai, usse hum refrence value kehte hai , aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai 

// var a =12 
// var b = a;

// b = b+ 2
// console.log(a)
// console.log(b)

// var a = [12,13]
// var b = a

// b.pop()
// console.log(a)
// console.log(b)

// var a= 12   // Primitive 
// var  a = [1,2,3,4]  // Refrence 

// Conditionals - if else if-else 
// jab bhi baat agar magar par aayegi ye fir baat aayegi aesa hua toh ye karo waisa hua toh ye karo  if (true or false)

if (11>12){

}else if (12 > 13){

}else if (14 > 16){

}else{

} 

// loops  - for while 
// loop  ka matlab repeat 

for (let i=1; i<=10; i++){
    // console.log('2 X', i, '=' ,i * 2)
}


// Arrays
// How can we create an array 
// variale  variabale name = []


// const Random =["Saab", "saanp", "Bmw", "Maran", "Amrod", "Lambo",  "I phone",  "GB",]
const Random = {
    khan : "123"
}

// console.log(Random)
// // console.log(typeof(Random))

// if(Random instanceof Array){
//     console.log("Yes Random is array")
// }else{
//     console.log("No Random is array")
// }


// let obj = {
//     name: "faisal",
//     Dept:"Software engineering",
//     seme: 8
// }

// console.log(obj)
// console.log(typeof(obj))
// console.log(Array.isArray(obj));


var array = [1, '2', '3', 4.5, '5.6'];

// Function to convert array elements to a specific data type
function convertArrayElements(array, dataType) {
  var convertedArray = [];
  
  for (var i = 0; i < array.length; i++) {
    var convertedElement = null;
    
    // Convert element based on the desired data type
    switch (dataType) {
      case 'string':
        convertedElement = String(array[i]);
        break;
      case 'number':
        convertedElement = Number(array[i]);
        break;
      case 'boolean':
        convertedElement = Boolean(array[i]);
        break;
      // Add more cases for other data types as needed
    }
    
    // Add the converted element to the new array
    convertedArray.push(convertedElement);
  }
  
  return convertedArray;
}

// Usage: Convert array elements to numbers
// var convertedArray = convertArrayElements(array, 'number');
// console.log(convertedArray);