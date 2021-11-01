/* ESTA PARTE ES CON VARIABLES FIJAS    
 const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100 

// con las llaves {} podemos imprimir un objeto 
console.log({ 
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

// ESTA PARTE ES CON FUNCIONES QUE PUEDEN RECIBIR DISTINTOS VALORES

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
  
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice"); 
    const priceValue = inputPrice.value; // del elemento inputPrice estamos sacando el valor escrito por el usuario

    const inputDiscount= document.getElementById("InputDiscount"); 
    const priceDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount);

    // esta parte es para que el resultado aparezca en el navegador 
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}


// con las llaves {} podemos imprimir un objeto 
/* console.log({ 
    precio,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */