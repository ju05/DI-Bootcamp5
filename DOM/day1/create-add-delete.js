//ADDING ELEMENTS

//1st: retrieve the section
const projectsSection = document.querySelector('#projects')
//2nd: create the element
let newP = document.createElement('p')
//3rd: create content
const content = document.createTextNode('Hello DOM')
//4th add the content in the element(<p>content</p>)
newP.appendChild(content)
//5th add element to the section
projectsSection.appendChild(newP)


let items = ['milk', 'shampoo']

function addProduct(){
    const prodDiv = document.getElementById('products')
    for (let product of items){
        //2nd: create the element
        let newProduct = document.createElement('p')
        //3rd: create content
        const content = document.createTextNode(product)
        //4th add the content in the element(<p>content</p>)
        newProduct.appendChild(content)
        //5th add element to the section
        prodDiv.appendChild(newProduct)

    }

}

addProduct()

//REMOVING ELEMENTS
let milkP = document.getElementById('products').firstElementChild
milkP.remove()

//ADDING ATTRIBUTES
//style
let shampooP = document.getElementById('products').lastElementChild
shampooP.style.color = 'red'
shampooP.style.fontSize = '50px'
shampooP.style.backgroundColor = 'pink'

//id and class
let mainSelector = document.querySelector('#main')
let funDiv = mainSelector.nextElementSibling
funDiv.setAttribute('id', 'fundiv')
funDiv.classList.add('funClass')