let student1 = 'Harry';
let student2 = 'Hermione';
let student3 = 'Ron';

let students = [student1, student2, student3]

console.log(students)
console.log(typeof(students))

//how to access array elements
console.log(students[1])

let studentsGrades = [
    [7, 10, 8],
    [10, 10, 9, 10],
    [5, 6, 3]
]

//how to access nested arrays
let possionsRon = studentsGrades[2][2]
console.log(possionsRon)

//the lenght property of an array
console.log(studentsGrades.length)

// hiw to change array element
let colors = ["blue", "yellow", "green"];

colors[0] = 'pink';
console.log(colors)

//array methods

//push() adds an elements to the end of the array
colors.push('brown')
console.log(colors)

//pop() removes the last element of the array
colors.pop()
console.log(colors)

//shift() remove sthe first element of the array
colors.shift()
console.log(colors)

//unshift() add an element to the first index
colors.unshift('purple')
console.log(colors)

//splice() remove element/s and add other instead
colors.splice(1, 2, 'hello', 'javascript')
console.log(colors)

//slice()
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

let citrus = fruits.slice(1,3)
console.log(citrus)
console.log(fruits)

let lastTwo = fruits.slice(-2)
console.log(lastTwo)

//join() adds the passed argument after each element of the array
console.log(fruits.join(' is a fruit '))




