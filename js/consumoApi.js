
/*
  Js Asíncrono

  consumo de apis con fetch
*/

function buscarDatos(){
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error)=> console.log(error))
}
buscarDatos()

/* 
Async and await 
Uso preferido para el consumo de API's actualmente
*/

async function buscarPersonajes() {
    try {
        let respuesta = await fetch("https://rickandmortyapi.com/api/character")
        let data = await respuesta.json();
        console.log(data)
    }catch (error){
        console.log(error)
    }
}
buscarPersonajes()

/*
Consumir multiples API's CON FOR AWAIT
*/

const apis = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/location',
    'https://rickandmortyapi.com/api/episode'
]

async function fecthRickAndMortyComplete() {
    try{
        for await (let api of apis){
            let response = await fetch(api);
            let data = await response.json();
            console.log(data)
        }
    }
    catch (error){
        console.log(error)
    }
}

fecthRickAndMortyComplete()

/*
Aunque no se recomienda usar un await dentro de un bucle porque puede 
bloquear el event loop, lo hice por seguir el curso
*/