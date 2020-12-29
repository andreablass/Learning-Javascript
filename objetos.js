var user = "Andy" 
var person = {
    name2 : "Andy",
    sex2 : "Female"
}

var miObjeto = {
    //clave : valor
    name : "Andrea",
    age: 20,
    important : true,
    text : `User ${user}`,
    miFuncion : (a, b) => a +b,
    object2 : person,
    nextObject :{ person,
        name : "ANdrea",
        sex : "Female",
    } ,
    fecha : new Date()

}

var {nombre} = miObjeto //Destructuracion de un objeto
var otraFUncion = (texto, {otroObjeto}) => {
     console.log(texto)
} 
otraFUncion(miObjeto, miObjeto)

/*console.log(miObjeto.name, miObjeto.age, miObjeto.important, miObjeto.text, miObjeto.miFuncion(4, 8), miObjeto.nextObject.sex)
console.log(miObjeto.object2.sex2)
console.log(miObjeto.fecha.getFullYear())

console.log(nombre)
console.log(otraFUncion(miObjeto))
*/