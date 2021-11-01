/* 
Cuál tipo de promedio elegiste para trabajar?  media geometrica 
¿Qué casos de uso tiene tu tipo de promedio? se usa sobre todo para sacar promedio de porcentajes y evaluar sus cambios. Solo funciona con valores positivos
¿Cómo traduces su fórmula a código JavaScript?la formula es la raiz cubica del producto de los valores que deseamos evaluar y el indice es la cantidad de observaciones */


function calcularMediaGeometrica(lista1){
    const sumaLista1 = lista1.reduce(
    function (valorAcumulado, nuevoElemento){ 
        return valorAcumulado * nuevoElemento;

    }
    );
const promedioLista1 = Math.pow(sumaLista1, 1/lista1.length);  
return promedioLista1
 }


// math pow es usado para la raiz en lugar de math.sqrt, por que queremos tener indices variables.
// la sintaxis de math pow es : (el valor al que deseamos aplicarle raiz, la potencia de este valor y el indice que deseamos que tenga la raiz)

// otra forma de expresarlo seria      const promedioLista1 = sumaLista1 ** (1 / lista.length)
// al usar ** le estamos asignando la potencia que se encuentra entre parentesis 
