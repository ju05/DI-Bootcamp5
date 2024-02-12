//objects

// let teacher = {
//     fullName : 'Alvus Dumbledore',
//     subject : 'Transfiguration',
//     role : 'Principal',
//     salary : 25000,
//     method : function (){}
// }

// //accessing obj properties
// console.log(teacher.fullName)
// console.log(teacher['fullName'])

// //add or change properties
// teacher.subject = 'Defense against the dark arts';
// teacher.age = 70;

// console.log(teacher)

//deleting object properties
delete teacher.age
console.log(teacher)

let user = {
    userName : 'ju05',
    password : '1234'
}

let users = [user]

let newsfeed = [
    {userName : 'ju05',
    timeline : 'posts'},
    {userName : 'john',
    timeline : 'posts'},
    {userName : 'maria',
    timeline : 'posts'},
]

console.log(newsfeed[0].userName);
