var miArray = ["Hola ", 2020, "Adiós"]

var persona1 = { //objetos
    nombre : "Andrea",
    edad : 20
} 
var persona2 = {
    nombre : "pepe",
    edad : 60
}
var persona3 = {
    nombre : "lola",
    edad : 29
}

var personas = [persona1, persona2, persona3] //arreglo de objetos

for ( let index = 0; index < miArray.length; index++){
    if (personas[index].edad >= 20) {
        break;
    }
    const element = personas[index].nombre;
    console.log(element)
}

miArray.forEach ( (element, i) =>  { //Foreach es para los objetos
    console.log(element )
})

/*personas.forEach(element =>  {
    console.log(element.edad)
})*/

/*for( i= 0; i <= 10; i++) {
    if (i == 1 ){
        console.log("HOla " + i + " vez")
    }else {
        console.log("HOla " + i + " veces")

    }
}*/