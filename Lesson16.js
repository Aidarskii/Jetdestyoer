// const sayHello = function() {
//     console.log('Hello')
//     return 'hello'
// }
// console.log(sayHello())




// const sayHello2 = () => ("Hello")
// console.log(sayHello2())





const rectangle = {
    width: 10,
    length: 20,
    findP: () => (this.width + this.length) * 2,
    findS: function() {
        return this.width * this.length
    }
}





// console.log(rectangle.findP())
// console.log(rectangle.findS())




// const arr = [1, 2, 3, 4, 5,]









// мутабельные
// const fib = [1, 2, 3, 5, 8, 13, 21]

// fib.push(34, 55)
// console.log(fib)
// fib.pop()
// console.log(fib)
// fib.unshift(0, 1)
// console.log(fib)
// fib.shift()
// console.log(fib)
// fib.reverse()
// console.log(fib)

// const fib = [1, 2, 3, 5, 8, 13, 21, 34]

// const fibOnlyEven = fib.filter((item) => item % 2 == 0)

// console.log(fibOnlyEven)

// function findOnlyEven()



// const users = [
//     { name: 'Adilet', age: 21, job: 'Node.js developers' },
//     { name: 'Aidar', age: 16, job: 'Node.js' },
//     { name: 'Temir', age: 29, job: 'police' },
//     { name: 'Nurali', age: 25, job: 'doctor' },
//     { name: 'Aisha', age: 17, job: 'Node.js developers' },
// ]

// const userAdults = users.filter((user) => user.age >= 21)
// console.log(userAdults)

// const userDevs = users.filter((user) => user.job.includes('developer'))
// console.log(userDevs)

// const usersWithFirstLetterA = users.filter((user) => user.name[0] == 'A')
// console.log(usersWithFirstLetterA)


// const fib = [1, 2, 3, 5, 8, 13, 21, 34]

// const findOfFilter1 = fib.filter((number) => number == 13) [0]
// console.log(findOfFilter1)

// const findOfFilter2 = fib.find((number) => number == 13) 
// console.log(findOfFilter1)








