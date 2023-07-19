// high order function are the function whcih accept function in a parameter or return a function or both 


// We use high order function when we are making closure

// 1st method 
// function abcd (){

// }

// abcd(function(){

// })

// 2nd method 
function abcd (){
    return function(){

    }
}

abcd()

// forEach methdd always takes another function inside it, so forEach is a higher order function 

let arr = [1,2,3,4,5]

arr.forEach(()=>{
    
})