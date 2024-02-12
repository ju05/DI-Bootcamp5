//for loop

// for (let i = 0; i >= 5; i ++){
//     console.log('the iteration is ' + i)
// }

// //for loop through array

let arr = [1,2,3,5,8,13]

// // for (let i=0; i < arr.length; i++){
// //     console.log('this is i: ' + i + 'element:' + arr[i])
// // }

// //for in object
let teacher = {
    fullName : 'Alvus Dumbledore',
    subject : 'Transfiguration',
    role : 'Principal',
    salary : 25000,
    method : function (){}
}

for (let property in teacher){
    console.log(property)
    console.log(teacher[property])
}


//for in array

// for (let i in arr){
//     console.log(arr[i])
// }


//while loop

// let count = 0
// while (count < 5){
//     count ++;
//     console.log(count)
// }

// let i = 0;
// do {
//     console.log('number is '+ i)
//     i ++
    
// }
// while (i <10)


// let userName = prompt('What is your name? Or q to exit.')

// while(userName != 'Juliana'){
//     if (userName == 'q'){
//         break;
//     }
//     else{
//         userName = prompt('What is your name?');
//     }    
// }

// for (let i = 0; i < 10; i ++){
//     if (i === 3){
//         continue;
//     }
//     else{
//         console.log('number is: ' + i);
//     }
// }

const names= ["john", "sarah", 23, "Rudolf",34]

for (let i in names){
    if (typeof(names[i]) != "string"){
        continue;
    }
    else if (names[i][0] === names[i][0].toUpperCase()){
        console.log(names[i])
    } 
    else{
        newName = names[i].replace(names[i][0], names[i][0].toUpperCase())
        names[i] = newName;
        console.log(names[i]);
        }
    }

someName = "Daniel"
console.log("hello, my name is " + someName)
console.log(`hello, my name is ${someName}`)