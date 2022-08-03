// // const number = 6
// // if (number % 2==0) {
// //     console.log('number is even')
// // }
// // else console.log('number is odd')

// // const month = 5
// // if (month == 6) {
// //     console.log("сейчас лето")
// // }
// // else if (month == 2) {
// //     console.log("сейчас зима")
// // }
// // else {
// //     console.log("сейчас осень")
// // }


// // const a = ['a', 'b', 'c']
// // a.push(1,2,3)

// // console.log(a)

// // const a = ['js', 'css', 'html']
// // console.log(a[0])

// // const a = ['js', 'css', 'html'] 
// // console.log(a[2])

// //  // 2
// // const num = [1, 2, 3, 4, 5]
// // const num1 = num.splice(1, 1, )
// // const num2 = num.splice(2, 1, )
// // console.log(num)


// // const num = [1, 2, 3, 4, 5]
// // const num1 = num.splice(1, 1)
// // console.log(num1,)

 

// // const a = [1, 2, 3, 4, 5]
// // const a1 = a.splice(3, 0, 'a')
// // const a3 = a.splice(4, 0, 'b')
// // const a4 = a.splice(5, 0, 'c')
// // console.log(a)

// // const num = [1, 2, 3, 4, 5]
// // const num1 = num.splice(2, 1, 'a')
// // console.log(num)



// // const students = ['Nurali', 'Aidar', 'Aibike', 'Aiym', 'Kurman']


// // for (let i = 0; i < students.length; i++) {
// //     console.log(`Hello, ${students[i]}`)
// // }

// // c = 28, f = 82

// // function findTempC(f) {
// //     const c = (f - 32) / 1.8
// //     return Math.round(c)
// // }
// // console.log(findTempC(82,))

// // findTempC()


// // FizzBuzz

// // fizzBuzz(1, 10)
// // function fizzBuzz(a) {
// //     for (let i = 1; i <= 100; i++) {
// //         let number = ''
// //         if (i % 3 === 0) number += 'Fizz'
// //         if (i % 5 === 0) number += 'Buzz'
// //         if(i % 3,5 === 0) number += 'FizzBazz'
// //         console.log(number || i);
// //     }
// // // }
// // // fizzBuzz()

// // function fizzBuzz(a) {
// //     for(let a = 1; a<=100;a++) {
// //         if(a % 3==0) {
// //             console.log('Fizz')
// //         } 
// //         if (a % 5 == 0)
// //         console.log('Bazz')
// //     }
// //     // if (r % 5 == 0) 
// //     // console.log('Buzz')

// //     if (a % 3,5 == 0)
// //     console.log('FlizzBuzz')
// // }
// // fizzBuzz()



// // function fizzBuzz(a) {
// //     for(let a=1;a<=100;a++) {
// //         if(a%3==0) {
// //             console.log('Fizz')
// //         } else if (a%5,3==0) {
// //             console.log('FizzBuzz')
// //         } else if (a%5==0) {
// //             console.log('Buzz')
// //         } else {
// //             console.log(a)
// //         }
// //         }
// //     }

// //  fizzBuzz()

// // function repeat(str, n) {
// //     let result = ''
// //     let i = 1
// //     while (i <= n) {
// //         result += str
// //         i++
// //     }
// //         return result
// // }   
// // console.log(repeat('neolabs', 5)) 

// // const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

// // function deleteVowels(str) {
// //     let result = ''
// //     for (let i = 0; i < str.length; i++) {
// //         if (!vowels.includes(str[i].toLowerCase()))
// //         result += str[i]
// //     }
// //     return result
// // }

// // const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

// // const arrow = str => {
// //     str.split('').filter().join('')
// //     return str
// // }


// // console.log(arrow('Hello world')) // Hll
// // console.log(arrow('Apple')) // ppl
// // console.log(arrow('Banana')) // Bnn





// // Date

// const schedule = [{}]

// function todaySchedule() {
//     const date = new Date()
//     date.getDay() // 1
//     return 'Monday: 09:00 - Завтрак'
// }
// const schedule1 = [{}]

// function todaySchedule1() {
//     const date = new Date()
//     date.getDay() // 1
//     date.
//     return 'Monday: 12:00 - Обед'
// }
// console.log(todaySchedule1())
// // console.log(todaySchedule())


// const obj = {
//     day: 'mon',
//     schedule1: {
//         '8:00': 'Wake up',
//         '8:00': 'Breakfast',
//     },
//     schedule2: [
//         ['8:00', 'Wake up'],
//         ['8:30', 'Breakfast']
//     ]

// }
// const schedule = [{}]

// function Sunday() {
//     const date = new Date()
//     date.getDay() // 1
//     return '8:00 - Wake up\n' + '8:30 - Breakfast'
// } const Arr =  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// console.log(Sunday())

const obj = {
    day: 'monday',
    schedule1: {
        '8:00': 'Wake up',
        '8:30': 'Breakfast',
        '12:00': 'Lunch',
        '19:00': 'Supper'
    },
    
}

console.log(obj.schedule1,'\n')