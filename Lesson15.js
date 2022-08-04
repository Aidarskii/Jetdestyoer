'use strict'
// const rectangle = {
//     with: 10,
//     length: 15,
//     findP: function () {
//         return  (this.with + this.length) * 2
//     }

// }
// console.log(rectangle.findP())
  





// function sub1 (a = 0, b = 0) {   // function declaration  можно вызвать до его создания
//     return a - b
// }

// console.log(sub1(10, 20))



// const sub2 = function(a = 0, b = 0) { // function expression записывается только в переменную!!!!!!!!!
//     return a - b
// }

// console.log(sub1(50, 20))



// СТРЕЛОЧНЫЕ ФУНКЦИИ (ПОХОЖ НА АНОМИМНУЮ)   нельзя использоывть контекст

// const sum1 = (a = 0, b = 0) => {
//     a *= 2
//     b *= 2
//     return a + b
// }
// console.log(sum1 (5, 6))

// const sum2 = (a = 0, b = 0) =>  (a + b) 
// console.log(sum2 (7, 11))




// const rectangle = {
//     width: 10,
//     length: 15,
//     getContextDefault: function() {
//         return this
//     },
//     getContextArrow: () => this
// }
// console.log(rectangle.getContextDefault())
// console.log(rectangle.getContextArrow())

// this.user = 'Adilet'
// console.log(this)


// const rectangle = {
//     width: 10,
//     length: 20,
//     findP: function () {
//         return (this.width + this.length) *2
//     },
//     findS: () => this.width * this.length,
// }
// console.log(rectangle.findP())
// console.log(rectangle.findS())








// const password = '12345678'

// console.log(password)

// function getPassword() {
//     const getPassword = '12345678';
//     function a () {
//         return password
//     }
//     return a()
    
// }
// console.log(getPassword())






// function generator() {
//     let number = -5

//    return function a() {
//        return number += 5
//     }
// }
// const count = generator()

// console.log(count()) // 0
// console.log(count()) // 5
// console.log(count()) // 10
// console.log(count()) // 15
// console.log(count()) // 20
// console.log(count()) // 25
// console.log(count()) // 35
// console.log(count()) // 40

// КОНТЕКСТ
// информация о том где мы находимся (в какой области видимости)




// DZZZ
const allitems =  ['25', null, 2, 12, undefined, 'duck', 19] // 2, 12. 19
const numbers = []
function onlyNumbers(arr = []) {
    for (let item of arr) {
        if (item == +item) {
         numbers[numbers.length] = +item
        }
    }
    return numbers
}
console.log(onlyNumbers(allitems))