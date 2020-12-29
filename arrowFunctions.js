var acceso = true

/*var accesoU = function(a) {
    return a
}*/

//var accesoU = a => a //arrowFunction retorna un sólo valor

//var accesoU2 = () => false //no tenemos parametros a nuestra funcion y retornamos un valor

//var accesoU3 = (a, n) => console.log(`Usuario ${n} Acceso ${a} `) //interpolacin de textos cuando pasamos mas de un parametro se usa parentesis
//accesoU3(acceso, "Andrea")

var accesoU = (a, nombre)  => {
    console.log(`Usuario en ejecución ${nombre} en ejecución `)
    return a
}

accesoU (acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")

