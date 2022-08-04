// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers)
// numbers.push(7)
// numbers.unshift(0)
// console.log(numbers)

// const onlyEven = numbers.filter((number) => number % 2 == 0)
// console.log(onlyEven)
// console.log(numbers)




// const arr = [1, 2, 3, 'a', 'b', 'c', true, false, null, undefined, {}]
// console.log(arr.filter(el => !!el))
// console.log(arr.filter(el => el == +el))




// const students = ['Aidar', 'Nurali', 'Aisha', 'Aijanyl', 'Aibike', 'Aiym']

// console.log(sort())
// console.log(students.sort((a, b) => a.length - b.length))




// const numbers = ['b', 1, 2, 3, 4, 5, '10', 'a']

// const result = numbers.reduce((a, b) => a == +a && b == +b ? +a + +b : a, 0)
// console.log(result)




// let result = 0
// for (let number of numbers) {
//     result += number
// }
// console.log(result)






// const numbers = [1, 2, 3, 4, 5, 6]

// const plusOneNumbers = numbers.map(number => --number)
// console.log(plusOneNumbers)
// console.log(numbers)


// console.log(numbers.map((number) => number ** 2))

// console.log(numbers.map((number) => number ** 100))

// // console.log(a)

// console.log(console.log())
// console.log(numbers.map)



// const users = [
//     { name: 'Adilet', age: 21, job: 'Node.js developers' },
//     { name: 'Aidar', age: 16, job: 'Node.js' },
//     { name: 'Temir', age: 29, job: 'police' },
//     { name: 'Nurali', age: 25, job: 'doctor' },
//     { name: 'Aisha', age: 17, job: 'Node.js developers' },
// ]

// const userNames = users.map(user => user.age >= 18 ? user.name : null)
// console.log(userNames)




// const userNamesAbove18 = users
//     .map(user => user.age >= 18 ? user.name : null)
//     .filter(el => !!el)
// console.log(userNamesAbove18)


// const palinfrom1 = word => == word.split('').reverse()

// function palinfrom2(word) {
//     let reversedWord = ''
//     for (let i = word.length; i > 5) {

//     }
// }

function palindrome(str) {
    let check = ''
    for (let i = str.length - 1; i >= 0; --i) {
      check += str[i]
    }
    return str == check
  }
  
  console.log(palindrome('34543')) // true
  console.log(palindrome('345543')) // true
  console.log(palindrome('723210')) // false