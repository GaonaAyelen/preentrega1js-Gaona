 function bienvenido(){
    let nombre = prompt("¿Como te llamas?")

    alert("Hola "+ nombre + " ¿Como estas?")
 }
  bienvenido()

const servicios  = ["1 - Soldadura" , "2 - Fabricacion", "3 - Reparaciones" , "4 - Montajes industriales"]

const Precios = [100, 200, 300, 400]


function elegirServicio () {

    alert("Bienvenido a nuestra tienda, donde encontraras estos servicios..\n"  +
          "1. Soldadura\n" +
          "2. Fabricacion\n" +
          "3. Reparaciones\n" +
          "4. Montajes industriales");

    // Solicitar al usuario que ingrese su eleccion
    let opcion = alert("Ingresa el número correspondiente al servicio que desea solicitar:\n" +
        "1. Soldadura\n" +
        "2. Fabricacion\n" +
        "3. Reparaciones\n" +
        "4. Montajes industriales");

    // Convertir la opción a un número entero
    opcion = parseInt(opcion);

    // Validar la opcion ingresada por el usuario
    switch (opcion) {
        case 1:
            alert("Has solicitado el servicio de soldadura.");
            break;
        case 2:
            alert("Has solicitado el servicio de fabricacion.");
            break;
        case 3:
            alert("Has solicitado el servicio de reparaciones.");
            break;
        case 4:
            alert("Has solicitado el servicio de Montajes industriales.");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona un número del 1 al 4.");
            
            elegirServicio();
            break;
    }
}

elegirServicio();


