const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbol = ['@', '#', '$', '%', '&', '*', '!', '?']

function validatePassword(password, repeatPassword) {
    if (password != repeatPassword) {
        return 'Passwords must math'
    } 
    if (password.length < 8) {
        return 'Password\'s length must be more than 8 characters'
    }

    const isUpper = !password
    .split('')
    .some(letter => letter == letter.toUpperCase() && isNaN(+letter))
    const isLower = !password
    .split('')
    .some(letter => letter == letter.toLowerCase() && isNaN(+letter))


    if (isUpper || isLower) {
        return 'Password must contain uppercase and lowercase letters'
    }

    if (!password.split('').some(letter => numbers.includes(+letter))) {
        return 'Password must contain at least one number'
    }

    if (!password.split('').some(letter => symbol.includes(letter))) {
        return 'Password must contain at least one special character'
    }

    return 'Password accepted'

}

console.log(validatePassword('Adminaaa123@', 'Adminaaa123@'))

