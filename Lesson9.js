// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130

// }

// let sum = salaries.John + salaries.Ann + salaries.Pete

// console.log(sum)


// const num = {}
 
// let sum = 0

// if (Object.keys(num).length > 0) {
// //  ...
// }
// console.log(sum)



// let menu = {
//     width 200,
//     height: 300,
//     title: "My menu"
// }

// if (typeof menu.width == 'number') {
//     menu.width *= 2
// }

// console.log(menu)



// for (let i = 1000; i <= 5000; i += 500) {
//     console.log(i)
// }


// for (let i = ['Aidar', 'Adilet', 'Nurali', 'Aijanyl']; i <= 'Hello'; i += [0]) {
//     console.log(i)
// }


const students = ['Nurali', 'Aidar', 'Aibike', 'Aiym', 'Kurman']

// for (let i = 0; i < students.length; i++) {

//     console.log(`Hello, ${students[i]}`)
// }

// for (let i = 0; i < students.length; i++) {
//     console.log(`Hello, ${students[i]}`)
// }



// for (let name of students) {
//     console.log(`Hello, ${name}`)
// }


for (let i in students) {
    console.log(`Hello, ${students[i]}`)
}