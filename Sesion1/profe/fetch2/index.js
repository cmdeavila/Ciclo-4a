const url = 'https://pokeapi.co/api/v2/pokemon/5/'

fetch(url)
.then(response => response.json())  // se convierte la respuesta en json
// el parametro data es el resultado de la respuesta
.then(data => {
    let element = document.getElementById('element')
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.id}</p>
    <img src = '${data.sprites.front_default}'/>
    <p> ${data.species.url}</p>
    `
    console.log(data)
})
.catch(error => console.log(err))