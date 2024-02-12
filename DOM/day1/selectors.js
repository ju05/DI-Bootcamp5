//DOM: Document Object Model

//accessing obj attributes
let someObj = {
    name : 'Juliana',
    email : 'Juliana@gmail',
}

console.log(someObj.name)
console.log(someObj['name'])

//Accessing DOM Nodes (elements)
let title = document.body.firstElementChild
title.textContent = 'Hello, Juliana'

let div = title.nextElementSibling
console.log(div.firstElementChild.textContent)


//EXERCISE 1
//1st way: div
let divSelector = document.body.firstElementChild
console.log(divSelector)
//2nd way: div
let bodySelector = document.body.children[1]
let divSelector2 = bodySelector.previousElementSibling
console.log(divSelector2)

//1st way: 
let ulSelect = document.body.children[1]
console.log(ulSelect)
//2nd way: ul
let ulSelector2 = divSelect.nextElementSibling
console.log(ulSelector2)


//1st way: second li
let secLi = document.body.children[1].lastElementChild
console.log(secLi)
//2nd way: second li
let secLi2 = ulSelector.children[1]
console.log(secLi2)


//METHODS

//querySelector

let divUsers = document.querySelector('.users') 
console.log(divUsers)

let allLi = document.querySelectorAll('li')
console.log(allLi)

//getElementById
let contentDiv = document.getElementById('content')
console.log(contentDiv)

//getElementsByClassName (plural: will return a list even if is just one element)
let ulSelector = document.getElementsByClassName('users')
console.log(ulSelector)


// exercise
// 1) console.log the text of the first li

// 2) select the content div

// 3) select the p tag



