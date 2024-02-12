// //functions

// function drinkCoffee(){
//     console.log("The user drinks coffee in the morning");
// }

// drinkCoffee()

// //parameters

// function userInfo(userName = 'johndoe'){
//     let userEmail = `Your email will be ${userName}@gmail.com`;
//     console.log(userEmail)
// }

// userInfo('juliana')

// //local scope

// function userInfo(userName, userAGe){
//     let eyeColor = 'blue';
//     console.log(`${userName} has ${eyeColor} eyes and is ${userAGe} years old`);
// }

// userInfo('noakirel', 21)
// console.log(eyeColor)

// //global scope
// let eyeColor = 'brown'

// function userInfo(userName, userAGe){
//     let eyeColor = 'blue';
//     console.log(`${userName} has ${eyeColor} eyes and is ${userAGe} years old`);
// }

// userInfo('noakirel', 21)
// console.log(eyeColor)


// function familyAges(myAge){
//     let mumsAge = myAge * 2
//     let dadsAge = mumsAge * 1.2

//     console.log(mumsAge, dadsAge.toFixed(1))
// }

// familyAges(23)


function myMumsAge(myAge){
    let mumsAge = myAge * 2

    return mumsAge
}

motherAge = myMumsAge(23)
console.log(motherAge)
