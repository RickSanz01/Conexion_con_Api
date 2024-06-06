let contenedorPersonajes = document.getElementById("personajes")

fetch ("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach((elementos) =>{
        const ContenedorCreado = document.createElement(`div`)

        ContenedorCreado.innerHTML = `
        <h2>${elementos.name}</h2>
        <img src="${elementos.image }"style="border: 4px blue solid; padding: 10px">
        `;
        contenedorPersonajes.append(ContenedorCreado)
    });
})

function volver(){
    window.location.replace("/peliculas.html");
}