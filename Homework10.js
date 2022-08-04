// 1
// const rectangle = {
//     width: 10,
//     length: 15,
// }
// rectangle.getP = function () {
//     console.log(`${this.width + this.length}`)
// }
// rectangle.getS = function () {
//     console.log (`${this.width * this.length}`)
// }
// rectangle.getP()
// rectangle.getS()

// 2
// function getNum(a, b) {
//     if(a%2==0&&b%2==0) {
//         console.log(a*b) 
//     }  else if (a%2!==0&&b%2!==0) {
//      console.log(a + b)
//     }  else if (a%2==0&&b%2!==0) {
//      console.log(b)
//     } else{
//      console.log(a)
//     }
// }
// getNum(3,4)

// 3
// const allitems =  [null, 2, 12, undefined, 'duck', 19] // 2, 12. 19
// const numbers = []
// function onlyNumbers(arr = []) {
//     for (let item of arr) {
//         if (typeof item == 'number') {
//          numbers[numbers.length] = item
//         }
//     }
//     return numbers
// }
// console.log(onlyNumbers(allitems))

// 4
// function operation(m,n,o) {
//  if(o=='sum') {
//     console.log(m+n)
//  } else if(o=='sub') {
//     console.log(m-n)
//  } else if(o=='mul') {
//     console.log(m*n)
//  } else if(o=='div') {
//     console.log(m/n)
//  }
// }
// operation(12,3,'div')