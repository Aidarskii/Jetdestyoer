// const arr = [true, false, 1, 2, 3, 'hello', 'world', 4, { name: 'Adilet'}]

// const [, , num1, num2, num3, , , num4, obj] = arr

// console.log(num1, num2, num3, num4, obj)
// console.log(num1 + num2 + num3 + num4)




// const products = {
//     'ball': 1000,
//     'shoes': 4000,
//     'water': 24,
//     'bread': 25,v    
//     'sweets': 100,
// }

// for (let key of Object.keys(products)) {
//     console.log(`${key} - ${products[key]} som`)
// }

// for (let [key, value] of Object.entries(products)) {
//     console.log(`${key} - ${value} som`)
// }



// const person = {
//     name: 'Adilet',
//     age: 21,
//     job: 'Node.js developer',
//     gender: 'male',
//     hobbies: ['volleyball'],
//     pets: null

// }

// const { name, hobbies, age, education = 'none'} = person
// console.log(name, hobbies, age, education)




function validatePassword(password) {
    if (password == password.toUpperCase()) {
      return 'upper password'
    }
    if (password == password.toLowerCase()) {
        return 'lower password'
    }
  
    return 'Password accepted'
  }
  
  console.log(validatePassword('Aa12345678'))


