// VAR, LET e CONST

var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)


let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)


for (let i = 0; i < 5; i++) {
    console.log(i)
}


function logName() {
    const name = 'Rafael'
    console.log(name)
}

const name = 'Sueli'

logName()

console.log(name)




//2 ARROW FUNCTION

//função clássica
const sum = function sum(a, b) {
    return a + b
}

/*função com arrow function
const arrowSum = (a,b) => {
    return a + b
} */

//quando a função tem só uma linha
const arrowSum = (a, b) => a + b

console.log(sum(10, 5))
console.log(arrowSum(20, 20))


const greeting = (nome) => {
    if (nome) {
        return 'Olá ' + nome + '!'
    } else {
        return 'Olá'
    }
}

console.log(greeting('Rafael'))
console.log(greeting())




//3 FILTER

const array = [1, 2, 3, 4, 5]

const highNumbers = array.filter((n) => {
    if (n > 3) {
        return n
    }
})

console.log(highNumbers)


const users = [
    {name: 'Rafael', available: true},
    {name: 'Pedro', available: false},
    {name: 'João', available: true},
    {name: 'Guilherme', available: false},
]

const availableUsers = users.filter((user) => user.available)

console.log(availableUsers)