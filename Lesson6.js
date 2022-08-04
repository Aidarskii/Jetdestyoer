// Pracric
// const number = 112
// number % 2 == 0 ?  console.log('number is even') : console.log('number is odd')

// const text = 'Neolabs'
// console.log(text.indexOf('o')) // 2
// console.log(text.indexOf('b')) // 5
// console.log(text.indexOf('f')) // -1


// const text = 'Welcome to Neolabs'

// console.log(1, text)
// console.log(2, text.toLowerCase())
// console.log(3, text.toLocaleUpperCase())

// const email1 = 'neolabsjs@gmail.com'
// const email2 = 'NEOLABSJS@GMAIL.COM'

// console.log(email1.toLocaleLowerCase() == email2.toLocaleLowerCase())



// const number = 1
// const group = 'Aidar,Nurali'



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(numbers[3]) // 4



// const groupjs = ['Aibike', 'Aidar', 'Nurali', 'Aijanyl']
// console.log(groupjs['1']) // Aidar
// console.log(groupjs.length)

// groupjs[4] = 'Temir' // not error
// groupjs = 'Kurmanbek' // error
// groupjs[groupjs.length] = 'Temir'
// groupjs[groupjs.length] = 'Kurman'

// console.log(groupjs)

// groupjs.length--

// groupjs.length = 0  // удаляет все

// console.log(groupjs)


 
const fruits = ['Apple', 'Banana', 'Mango', 'Kiwi']
console.log(fruits)

fruits.push('Pear')
fruits.push('Orange', 'Pineapple')
console.log(fruits)

fruits.pop()
const deleted = fruits.pop()
console.log(fruits)

fruits.push(deleted)
console.log(fruits)

fruits.unshift('Pineapple')
fruits.unshift('Pineapple', 'Pear')
console.log(fruits)


fruits.shift()
fruits.shift()
fruits.shift()
console.log(fruits)