let solarSystem = {
    Mercury : {'moons' : 0, 'color': "orange"}, 
    Venus : {'moons': 0, 'color': "grey"}, 
    Earth : {'moons': 1, 'color': "blue"}, 
    Mars: {'moons' : 2, 'color': "red"}, 
    Jupiter: {'moons' : 67, 'color': "brown"}, 
    Saturn : {'moons': 62, 'color': "yellow"}, 
    Uranus : {'moons' : 27, 'color': "lightblue"}, 
    Neptune : {'moons' : 14, 'color': "darkblue"}
}

for (let planet in solarSystem){
    // console.log(solarSystem[planet]['color'])
    let div = document.createElement('div')
    div.classList.add('planet')
    div.style.backgroundColor = solarSystem[planet]['color']
    let section = document.querySelector('.listPlanets')
    section.appendChild(div)
}