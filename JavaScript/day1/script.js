// //declaring and assigning values to variables

// let hellowWorld = "Hello World";
// console.log(hellowWorld)

// let myName = 'juliana\'s ' //this is my name

// console.log(myName + hellowWorld)


// console.log('Hello, my name is' + myName)

// let longString = "This is a very long string which needs \ to wrap across multiple lines because otherwise,\ my code is unreadable.";

// // let lenghtStr = 
// console.log(myName.length)

// let a,b; //just declaring the variables

// console.log(a+b)

// a = 5
// b = 2

// console.log(a+b)



//string methods

//indexof()

let str = "Hello Everyone, please say hello to the class";
let upperHello = str.indexOf('Hello')
let lowerHello = str.indexOf('hello')

console.log(upperHello)
console.log(lowerHello)

//substring(startIndex, endIndex)

console.log(str.substring(0,5))
console.log(str.slice(0,5))

//toLowerCase() toUpperCase()
let hello = 'HeLlo WoRlD'
console.log(hello.toLowerCase())

//trim() deletes spaces in the begining and in the end of a string
let address = '  Betzalel, 4 Ramat Gan  '
let cleanAddress = address.trim()
console.log(address)
console.log(cleanAddress)

//charAt()
console.log(address.charAt(5))

