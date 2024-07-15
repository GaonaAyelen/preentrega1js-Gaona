

function bienvenido() {
    let nombre = prompt("¿Como te llamas?")

    alert("Hola " + nombre + " ¿Como estas?")
}
bienvenido()



const servicios = ["1 - Soldadura", "2 - Fabricacion", "3 - Reparaciones", "4 - Montajes industriales"]

const Precios = [100, 200, 300, 400]



function elegirServicio() {

    alert("Bienvenido a nuestra tienda, donde encontraras estos servicios..\n" +
        "1. Soldadura\n" +
        "2. Fabricacion\n" +
        "3. Reparaciones\n" +
        "4. Montajes industriales");


    let opcion = prompt("Ingresa el número correspondiente al servicio que desea solicitar:\n" +
        "1. Soldadura\n" +
        "2. Fabricacion\n" +
        "3. Reparaciones\n" +
        "4. Montajes industriales");


    opcion = parseInt(opcion);


    switch (opcion) {
        case 1:
            confirm("Has solicitado el servicio de soldadura.");
            break;
        case 2:
            confirm("Has solicitado el servicio de fabricacion.");
            break;
        case 3:
            confirm("Has solicitado el servicio de reparaciones.");
            break;
        case 4:
            confirm("Has solicitado el servicio de Montajes industriales.");
            break;
        default:
            confirm("Opción no válida. Por favor, selecciona un número del 1 al 4.");

            elegirServicio();
            break;
    }
}
elegirServicio();


let usuarioDuenio = confirm("¿Sos el dueño de esta pagina?");

if (usuarioDuenio) {

    let agregueServicio = prompt("Puede agregar el nuevo servicio..");

    servicios.push(agregueServicio);

    let servicioAgregado = alert("Se agrego el nuevo servicio.. Gracias!");

    servicioAgregado()


} else {
    let inicio = confirm("Gracias por visitar nuestra pagina.. por favor lo invitamos a elegir el servicio por el cual esta interesado!")

    let seleccion = parseInt(inicio);


    elegirServicio(parseInt(seleccion));

}




