//Recibimps una expresión y de acuerdo a ella, ejecuta un caso

 var opcion = "Nuevwwwwo menu"

 switch (opcion) {
     case 1:
         console.log("Menú de user")
         break;
    case 2:
        console.log("Menú de admin")
         break;
    case 3:
        console.log("Config")
         break;
    case "Nuevo menu":
        let miNuevoMenu = "SALIR"
        console.log(miNuevoMenu )
        break
    default:
        console.log("Break")
        break;     
 }