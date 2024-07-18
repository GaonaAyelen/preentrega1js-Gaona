let nombre = prompt("¿Como te llamas?");

function bienvenidoCliente (nombre) {

    alert("Hola " + nombre + " ¿Como estas? Bienvenido a Global Metal!");
}
bienvenidoCliente(nombre);


const servicios = ["1 - Soldadura", "2 - Fabricacion", "3 - Reparaciones", "4 - Montajes industriales"]

const precios = [100, 200, 300, 400]



function elegirServicio() {

     alert("Global Metal te ofrece estos servicios..\n" +
        servicios.join("\n"));

 let opcion = prompt("Ingresa el número correspondiente al servicio que desea solicitar:\n" +
            servicios.join("\n"));


    opcion = parseInt(opcion);


    switch (opcion) {
        case 1:
            confirm("Has solicitado el servicio de soldadura," + "el precio es de " + precios[0] );
            break;
        case 2:
            confirm("Has solicitado el servicio de fabricacion," + "el precio es de " + precios[1]);
            break;
        case 3:
            confirm("Has solicitado el servicio de reparaciones," + "el precio es de " + precios[2]);
            break;
        case 4:
            confirm("Has solicitado el servicio de Montajes industriales," + "el precio es de " + precios[3]);
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




