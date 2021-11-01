/* const salario = [
    300000,
    300000,
    300000,
    300000,
    300000,
    300000,
    300000,
    300000,
    300000,
    300000,
    300000,
    300000,
];

const sumaSalario = salario.reduce(
    function (valorAcumulado=0, valorNuevo){
        return valorAcumulado + valorNuevo;
    }

); */

/* 
const bonificaciones = 5000;

const totalSalarioBeni = sumaSalario + bonificaciones;

const aguinaldo = totalSalarioBeni/12; */

function calculoAguinaldo(salario,Meses){
    const salarioCompleto =  (salario * Meses)/12;
    return salarioCompleto;
    
}


function onClickButtonAguinaldo(){
    const inputSalary = document.getElementById("inputSalary");
    const salary = inputSalary.value;

    const inputMeses = document.getElementById("inputMeses");
    const meses = inputMeses.value;

    const aguinaldo = calculoAguinaldo(salary,meses);

/*     alert("aguinaldo igual a" + aguinaldo);
 */
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El aguinaldo es $" + aguinaldo;
}

// Cuota = TI*prestamo / 1-(1+TI)^-1
// TEM= tasa efectiva mensual o intereses 

// fijo seria 
/* const prestamo = 30
const interes = 1/100
const meses = -60  */

/* const cuota = prestamo*interes/1-Math.pow(1+interes,meses);
 */

function calcularCuotaMensual(prestamo, interes, meses){
    const interesPorcentaje = interes/100;
    const numerador = interesPorcentaje*prestamo;
    const denominador = 1-Math.pow(1+interesPorcentaje,-meses);
    const cuota = numerador/denominador; 
    return cuota;
}

function onClickButtonCuota(){
    const inputPrestamo = document.getElementById("inputPrestamo");
    const prestamo = inputPrestamo.value;

    const inputInteres = document.getElementById("inputInteres");
    const interes= inputInteres.value;

    const inputMesesCuota = document.getElementById("inputMesesCuota");
    const meses1= inputMesesCuota.value;

    const cuotaMensual = calcularCuotaMensual(prestamo,interes,meses1)

    const resultP1 = document.getElementById("ResultP1");
    resultP1.innerText = "La cuota mensual es $" + cuotaMensual;
}



