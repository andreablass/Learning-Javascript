
pelicula1 = { titulo : "La monja", anio: 2018, valoracion : 4}
pelicula2 = { titulo : "Anabelle", anio: 2019, valoracion : 3}
pelicula3 = { titulo : "LOL", anio: 2016, valoracion : 5}
pelicula4 = { titulo : "EL conjuro", anio: 2018, valoracion : 5}
pelicula5 = { titulo : "ESO", anio: 2015, valoracion : 3}

peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5]

let nuevoObjeto = ({valoracion}) => {

    valoracion >= 5 ? valoracion += 1: valoracion += 0
    let objeto = {}
    objeto ["valoraión"] = valoracion
    return objeto 
}

let miNuevaValoracion = peliculas.map(nuevoObjeto)
console.log(miNuevaValoracion)

let reducirValoracion = (acum, {valoracion}) => acum + valoracion

let miTotalValoracion = peliculas.reduce(reducirValoracion,0)

console.log(miTotalValoracion)

let sumarValoración = ({ valoracion }) => 5 ? valoracion  += 1 : valoracion += 0

let valorado = peliculas.map(sumarValoración)
console.log(valorado)