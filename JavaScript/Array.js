const cars = ["Toyota", "Volvo", "BMW"]

// console.log(cars)

// Why use array:
/* 
=> if you have a list of items (a list of car names, for example), storing in a singe variable could look like this 

*/

// let car1 = "Toyota"
// let car2 = "Volvo"
// let car3 = "BMW"

// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is array 

// WE can also create an array like this but this is not a sutiable way to create an array 

const names = []

names[0] = "Khan"
names[1] = "Bhai"
names[2] = "aatif"

// console.log(names)
// he two examples above do exactly the same.

// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.

// Changing an array element 
names[0] = "opel"
// console.log(names)

// console.log(names.toString())
// console.log(names.join(','))
// console.log(...names, ...cars)

for (let i=0; i<cars.length; i++){
    // console.log(cars[i])
}

const fruit = ["banana", "Orange", "Apple", "Mango" ]
// console.log(fruit)
let len = fruit.length

// finding length
// console.log(len)
// convert arry to string
// console.log(fruit.toString())

// joinning array with + sign
// console.log(fruit.join('+'))
// Pop the last element from the array
fruit.pop()
// console.log(fruit)
// push() => add element at the end of an array 
fruit.push("Kiwi")
// console.log(fruit)
// Shift() =>  shift method remove the first array element and "shifts" all other element to a lower index 

fruit.shift()
// console.log(fruit)

// unshift() => method add a new element to an  array ( at the begining), and "unshift" older element

fruit.unshift("Mango")
// console.log(fruit)

// Array index start with 0 
// [0] is the first array element 
// [1] is the second element 
// [2] is the third 

fruit[0] = "Apple"
fruit[2] = "mango"

// console.log(fruit)

fruit.sort()
// console.log(fruit)

delete fruit[0]
// console.log(fruit)

// concat()

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)

let num1=[1,2,3,4,5,6,7]
let num2 = [8,9,"s",1,2,3]

let concat = num1.concat(num2)
// console.log(concat)

// merging 3 arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const merging = arr1.concat(arr2, arr3)
// console.log(merging)  

// console.log(arr1.concat("Faisal"))


// Flat array (): flattening an arrat is the process of reducing the dimensionality of an array 

// The flat() method create a new array with sub-array element concatenated to a specific depth 

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat()
// console.log(myArr)
// console.log(newArr)

// Splice() method can be used to add new items to an array 
// const fruits = ["Banana", "Apple", "Mango", "orange"]

// fruits.splice(3,0, "Lemmon", "kiwi")
// console.log(fruits)

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits
// The splice() method returns an array with the deleted items:


// slice()
// Slice method create a new array
// The slice() method does not remove any element from the source array 

const name1 = ["Aatif", "Faisal", "Roman", "Sikandar"];

function removeElement(array, searchQuery) {
  return array.map((element) => element === searchQuery ? null : element).filter(Boolean);
}

const searchQuery = "Faisal";
const modifiedArray = removeElement(name1, searchQuery);

// console.log(modifiedArray);


/*  
    In this example, the removeElement function uses the map() method to iterate over each element of the array. If an element matches the search query, it returns null; otherwise, it returns the original element. After that, the filter(Boolean) method is used to remove any null values from the resulting array.
*/


const points = [40, 100, 1, 5, 25, 10] 

for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }

//   console.log(points)



