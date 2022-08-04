// function passwordCheck(password, repeatPassword){
//     if(password !== repeatPassword){
//         return 'Passwords do not match'
//     }else if(password.lenght < 8){
//         return 'Password lenght must be more than 8 symbols'
//     }else if(password.split('').some(x => typeof +x !== 'number')){
//         return 'Password must include number(s)'
//     }else if (!password.split('').some(letter => letter == letter.toUpperCase()) {
//         return 'Password must include lower case'
//     }else if(!password.split('').some(letter => letter == letter.toLowerCase())) {
//         return 'Password must include upper case' 
    
//     }
//     else{
//         return 'Password is accepted'
//     }
// }
// console.log(passwordCheck('123AA@$#GT','123AA@$#GT'))