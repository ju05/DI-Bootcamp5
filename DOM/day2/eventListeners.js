//1st: retrieve the element


const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

//adding eventListener

// grandparent.addEventListener('click', e => {
//     console.log('GP clicked 2')
//     console.log(e.type)
// })
//onclick
// document.onclick = function(){
//     console.log('blank space clicked')
// }

// grandparent.onclick = function(){
//     console.log('grandparent clicked')
// }

// parent.onclick = function(){
//     console.log('parent clicked')
// }

// child.onclick = function(){
//     console.log('child clicked')
// }

function grandparentClicked(e){
    console.log('grandparent was clicked')
}
function parentClicked(e){ 
    e.stopPropagation()   
    console.log('parent was clicked')
    
}
function childClicked(e){
    console.log('child was clicked')
}

//capturing
grandparent.addEventListener('click', grandparentClicked)
parent.addEventListener('click', parentClicked)
child.addEventListener('click', childClicked)
