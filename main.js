//-------------Construccion de servicios-------------//

class Servicio{
    constructor(id,nombre,descripcion,precio){
        this.id = Number(id),
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.precio = Number(precio)
    }
}

//-------------Agregando servicios a un arreglo-------------//

const arrayServicios = [];

arrayServicios.push(new Servicio(1, "Customer experience", "Fidelización del cliente a través de experiencias hechas a medida." , 200 ));
arrayServicios.push(new Servicio(2, "Business Model", "Descubrimiento de oportunidades y diseño de una estrategia integral de negocio." , 300 ));
arrayServicios.push(new Servicio(3, "Digital Transforme", "Construccion de negocios digitales, agiles, dinamicos y rentables.", 400));
arrayServicios.push(new Servicio(4, "Digital Strategy", "Potencie exponencialmente su negocio y obtenga resultados concretos.", 400));


//------------Funciones para ordenar la lista segun su precio--------------//

const ordenarMenorMayor = () => {
    arrayServicios.sort((a,b) => a.precio - b.precio);
    mostrarLista();
};

const mostrarLista = () => {
    const lista = [];
    arrayServicios.forEach(servicio => lista.push(servicio.id + " . "+ servicio.nombre + " $"+ servicio.precio));
    alert("Lista de servicios y sus precios: " + "\n" + lista.join("\n"));
};
//----------------Funciones para seleccionar los servicios-----------------//

const serviciosElejidos = [];

function seleccionar(){
    let continua;
    while(continua != false){
        let eleccion = prompt("Ingrese el ID del servicio que desea:");
        let servicioSeleccionado = arrayServicios.find(servicio => servicio.id == eleccion);
        serviciosElejidos.push(servicioSeleccionado);
        alert("El servicio que elijio es: " + servicioSeleccionado.nombre);
        continua = confirm ("¿Desea agregar otro servicio?");
    }
}

//----------------Funciones para eliminar los servicios-----------------//
function borrar(){
    borrado = confirm("¿Desea eliminar algun servicio ya seleccionado?");
    while(borrado == true){
        let eliminar = prompt("Ingrese el Id del servicio que desea eliminar:");
        let servicioAeliminar = serviciosElejidos.find(servicio => servicio.id == eliminar);
        serviciosElejidos.splice(servicioAeliminar,1);
        borrado = confirm("¿Desea elimar otro servicio?");
    }
}

//----------------Funcion para obtener descuento-----------------//
const obtenerDescuento = (total) => {
    if(total >= 1000){
        total = total * 0.75;
        alert("Por tu compra tienes un descuento del 25%")
    }
    return total;
}

//----------------Funcion para obtener el total-----------------//

let total = 0;

function obtenerTotal(){
    alert("La servicios elejidos son: " + serviciosElejidos.length);
    total = serviciosElejidos.reduce((acc, elemento) => acc + elemento.precio, 0);
    alert("El total de la compre es: " + obtenerDescuento(total) + " dolares");
}

//----------------Funcion funcion de compra-----------------//

const comprar = () => {
    if (confirm("¿Desea ver nuestra lista de servicios?")){
        ordenarMenorMayor();
        if (confirm("¿Desea comprar algunos de nuestros servicios?")){
            seleccionar();
            borrar();
            obtenerTotal();
        } else{
            alert("Gracias por visitar nuestra agencia!")
        }
    } else{
        alert("Esperamos su regreso!")
    }
}

comprar();
