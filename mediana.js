function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );     
                                      
    const promedioLista = sumaLista/ lista.length;
     
    return promedioLista;
        
    }

function calcularMedianaLista(lista){

const listaSorted = lista.sort((numMenor, numMayor)=> numMenor - numMayor)
// esta parte es para que los numerso se ordenen ascendente  
    

const mitadLista = parseInt(listaSorted.length / 2 );  // ParseInt convierte números con decimales en números enteros

function esPar(numero){
    if(numero % 2 === 0 ){  // entre parentesis es para probar que sea par, significa que si el residuo de la division de nuestro numero es igual a cero es par y, por lo tanto, true
        return true;
    }
    else {
        return false;

    }
}

let mediana

if (esPar(listaSorted.length)){
    const elemento1 = listaSorted[mitadLista - 1];
    const elemento2 = listaSorted[mitadLista];

    const promedioElementos1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    
    mediana = promedioElementos1y2;
    return mediana
}
else  {
    mediana = listaSorted[mitadLista];
    return mediana;
}

}
calcularMedianaLista([10, 110, 19])