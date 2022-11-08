//ARREGLO DE OBJETOS

/*let arreglo = [{},{},{}];

const TopTresJugadoresTenis = [{
    ranking:1,
    nombre:"Djokovic",
    puntos:11830,
    pais:"Serbia"
},{
    ranking:2,
    nombre:"Nadal",
    puntos:11300,
    pais:"España"
},{
    ranking:3,
    nombre:"Thiem",
    puntos:9850,
    pais:"España"
}];*/

//OBJETO CON ARREGLOS
/*let Djokovic = {
    ranking:1,
    edad:33,
    puntos:11830,
    pais:"Serbia",
    GrandSlams:17,
    Activo:true,
    estaTemporadaResults:{
        wins:["Australian Open", "Cincinnati","Rome","Dubai"],
        finals:["Roland Garros"],
        quarterFinals:["Vienna"],
    }
    nickName:["Nole", "Djoker"],
}*/

//ACCESOS EN ARRAYS

/*const empleados = ["Jose Perez", "Maria Sanchez","Juan Martinez","Pepa Jimeno"]

console.log(empleados);

const juan = empleados [2];

console.log(juan);

//ACCESO EN ARRRAYS ANIDADOS

const empleadosGenero =  [["Maria","Pepa"],["Jose","Juan"]]

console.log(empleadosGenero[1][0])
console.log(empleadosGenero[1][0])*/

//ACCESO EN OBJETOS

/*let cliente = {
    nombre: "Hipermarket",
    direccion: "C/La Habas 14",
    ciudad: "Marketcity",
    factura: 23000,
    facturasPendientes: true,
    transportistas:["Jose Perez", "Maria Sanchez","Juan Martinez","Pepa Jimeno"], 
}

console.log(cliente.transportistas[3]);*/

//ACCESO EN OBJETOS
let Djokovic = {
    ranking:1,
    edad:33,
    puntos:11830,
    pais:"Serbia",
    GrandSlams:17,
    Activo:true,
    estaTemporadaResults:{
        wins:["Australian Open", "Cincinnati","Rome","Dubai"],
        finals:["Roland Garros"],
        quarterFinals:["Vienna"],
    },
    nickName:["Nole", "Djoker"],
}

//Cual fue el cuarto titulo que gano djokovic este año?

console.log(Djokovic.estaTemporadaResults.wins[3])