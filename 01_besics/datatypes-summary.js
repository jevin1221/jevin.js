// primitive 

// 7 types: sting, number, boolearn, null, undefind, BigInt, symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsidetemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('1221')
console.log(id === anotherId)

// const BigInt = 2104200612012005n


//reference (Non primitive):    
// array, objects , functions

const heros =["jevin, prince ,shyam"]
let myObj ={
    name: "jevin"
   

}
const myFunction = function(){
    console.log("hello jevin");
} 

console.log(typeof anotherId);