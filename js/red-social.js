/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encata Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Debeloper es lo mejor!",
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta más el café que el téa",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar",
    },
];


const user = prompt('Cuál es tu usuario: ');
const pass = prompt('Cuál es tu clave: ');


// Validaremos el username y pass en el arreglo userdatabase a partir de iteraciones en cada objeto
// del mismo

function validacion(user, pass) {
    //Iteramos por cada objeto del arreglo usersDatabase
    for (let i = 0; i < usersDatabase.length; i++) {
        //a partir del indice que se itera por cada objeto del arreglo osea la variable i
        //comparamos user y pass ingresados
        if (usersDatabase[i].username === user && usersDatabase[i].password === pass) {
            return true;
        }

    }
    // Al poner la el false fuera del for, logramos que valide los datos en todos los objetos del arreglo y si no encuentra ningun match devuelve el false dando a entender que no existe ningun usuario con esa info en el arreglo de userDatabase
    return false;
}


//Realizaremos una segunda funcion en la que si el return es true o false nos dara un mensaje de bienvenida y el timeline

function signIn(user, pass){
    if(validacion(user,pass)){
        alert(`Welcome User ${user}`)
        console.log(usersTimeline)
    }else{
        alert('Ups!, user or password incorrect!')
    }
}

signIn(user,pass)


// //Función para autenticar el user

// function login(username, password){
//     //Buscaré el usuario en la base de datos por nombre y clave
//     // Usaré el método .find() en usersDatabase para buscar un usuario en la base de datos. .find() recorre cada elemento del arreglo y devuelve el primer elemento que cumple con la condición especificada.
//     const user = usersDatabase.find(user => user.username === username && user.password === password);

//     //Si la busqueda y comparación anterior fue exitosa, devolvera dicho valor en la const user, por el contrario si no encuentra ningun usuario, devolvera un undefined o null

//     //validaremos que sucede si encuentra un usuario

//     if(user){

//         console.log(`Bienvenido, ${username}!`);

//         const timeline = usersTimeline.find(t=> t.username.toLowerCase()=== username.toLowerCase());

//          //Si la busqueda y comparación anterior fue exitosa, devolvera dicho valor en la const user, por el contrario si no encuentra ningun usuario, devolvera un undefined o null

//          if(timeline){
//             console.log('Timeline: ' + timeline.timeline)
//          }else{
//             console.log("No se encontró un timeline para este user")
//          }
//     }else{
//         console.log("Error, datos incorrectos")
//     }
// }

// // Ejemplo de uso
// login("andres", "123");   // Usuario correcto, debería mostrar mensaje de bienvenida y timeline
// login("andres", "000");   // Contraseña incorrecta, debería mostrar mensaje de error
// login("mariana", "789") // Usuario correcto, debería mostrar mensaje de bienvenida y timeline