function calcularPrecioConDescuentoCupon(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
  }

  const cupones = [
    "primeraCompra",
    "clienteFrecuente",
    "festividades",
];


  function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice"); 
    const priceValue = inputPrice.value; // del elemento inputPrice estamos sacando el valor escrito por el usuario

    const inputCupon= document.getElementById("InputCupon"); 
    const cuponValue = inputCupon.value;

    let descuento;

  switch(cuponValue) {
    case cupones[0]:
      descuento = 15;
    break;
    case cupones[1]: 
      descuento = 30;
    break;
    case cupones[2]: 
      descuento = 25;
    break;
  }

    const precioConDescuento = calcularPrecioConDescuentoCupon(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}