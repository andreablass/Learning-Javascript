var permitido = "Usuario permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre : "Pepe",
    miAuto : [
        pintura = {
            marca : "Marca",
            precio : 2000,
            color : " Verde"
        },
        vendedor = {
            nombre : "ANdre",
            edad :2,
            ayudante : {
                nombre : "Andy"
            }
        }
    ]
}

var miArray = ["Andrea", 2020, 34.39, true, ["Otro array", "array", 7999], miFuncion(permitido), persona]

console.log(miArray[6].miAuto[1].ayudante.nombre)
