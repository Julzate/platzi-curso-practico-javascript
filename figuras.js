// Código del cuadrado
console.group("Cuadrados")
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm") */

function perimetroCuadrado(lado) {
    return lado* 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
    return lado* lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

// Código del triángulo
console.group("Triángulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm "
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo)

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}  
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm")

function areaTriangulo (base, altura){
    return (base * altura)/2;
}

// console.log("El area del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

// Código del círculo
console.group("Círculos")

// Radio
// const radioCirculo = 4;
// console.log("Los radio del circulo es: " + radioCirculo + "cm")

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm")

// PI 
const PI = Math.PI;
console.log("PI es: " + PI )

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area 

function areaCirculo(radio){
    return (radio * radio)* PI ;
}

console.groupEnd();


// Aquí se da la conexión con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    // para enviar la alerta con el perimetro, en parentesis va el valor que puso el usuario   
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    // para enviar la alerta con el perimetro, en parentesis va el valor que puso el usuario   
    const area = areaCuadrado(value)
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const base = document.getElementById("InputTrianguloBase");
    const value3 = base.value;
    
    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const value1 = base.value;

    const altura = document.getElementById("InputTrianguloAltura");
    const value2 = altura.value;

    const area = areaTriangulo(value1, value2)
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value; 
    const perimetro = perimetroCirculo(value)
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value; 
    // para enviar la alerta con el perimetro, en parentesis va el valor que puso el usuario   
    const area = areaCirculo(value)
    alert(area);
}