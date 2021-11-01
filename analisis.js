// helpers 
function esPar(numero){
    return (numero % 2 === 0 );
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );     
                                      
    const promedioLista = sumaLista/lista.length;
     
    return promedioLista;
    
}

// calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const promedioPersona1y2 = calcularMediaAritmetica([
            personaMitad1,
            personaMitad2,
        ])

        mediana = promedioPersona1y2
        return mediana

    }else {
        const personaMitad= lista[mitad];
        return personaMitad;
    }
}

// aqui calculamos la mediana general

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;

    }
)
// aqui ordenamos el array que creamos 

const salariosColSorted = salariosCol.sort(

    function (salaryA, salaryB){
    return  salaryA - salaryB;

    }
)

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// mediana del top 10%
// al splice se le envian dos parametros, el primero es donde se va a cortar el array y el segundo es la cantidad de elementos que se van a eliminar despues de ese corte. los elementos cortados seran guardados en la constante 

const spliceStart= (salariosColSorted.length * 90)/100; // aqui le ponemos como start el 90%
const spliceCount= salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
   
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col, 
}
  
)