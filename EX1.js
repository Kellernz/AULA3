
let x = 10
let y = 10
console.log(x)
y = 5
console.log(x, y)

// console.log(x) exibirá "10"
// console.log(x, y) exibirá "10 5"





let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)

/*
c = a , c = 10 
b = c , b = 10
a = b , a = 10

portanto:

console.log = "10 10 10"
*/


let keller
let kellerAge
console.log(typeof keller)
console.log(typeof kellerAge)
keller = "Guilherme Keller"
kellerAge = 19
console.log(typeof keller)
console.log(typeof kellerAge)

//O comando typeof() indica qual o tipo da variável. 
//Ele indicará qual o tipo da variável atribuído à ele, que pode ser undefined, number, string ou boolean.

console.log("Olá", keller+ ", você tem", kellerAge, "anos?")

let AB = 10
let CD = 5 
console.log(AB, CD) 

EF = AB
AB = CD
CD = EF
console.log(AB, CD)

