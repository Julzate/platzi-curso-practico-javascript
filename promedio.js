/* const lista1 = [
    100,
    200,
    300,
    500,
];
 */
// las variables con let son las que se pueden cambiar en el futuro

/* let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1/lista1.length; */


function calcularMediaAritmetica(lista){
   /*  let sumaLista = 0;

for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
} */
//esta es otra forma de obtener el promedio, aqui llamamos al parametro de la funcion y le agregamos el reduce
const sumaLista = lista.reduce(
    function (valorAcumulado=0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);     
                                  
const promedioLista = sumaLista/lista.length;
 
return promedioLista;


}