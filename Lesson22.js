// let a = 10
// let b = a
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)
// console.log(b)




// const numbers1 = [1, 2, 3, 4, 5]
// const numbers2 = numbers1


// class Figure {
//     constructor(length = 0) {
//         this.length = length
//     }
// }

// class Circle extends Figure {
//     constructor(radius) {
//         const diameter = radius * 2
//         const length = diameter * 3.14
//         super(length)
//         this.radius = radius
//         this.diameter = diameter
        
//     }
// }

// const circle = new Circle(5)
// console.log(circle)

// console.log('b' + 'a' + + 'a' + 'a').toLowercase()




// console.log(b)


// инкопсуляция
class Developer {
        #salary
    constructor(position, skills, salary) {
        this.position = position
        this.skills = skills
        this.#salary = salary
        
    }

    get() {
        return this.#salary
    }


}

const frontend = new Developer('Middle', ['JavaScript', 'React'], '800$')
console.log(frontend)
console.log(frontend.get())





