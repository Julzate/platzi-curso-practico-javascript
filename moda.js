// este es el array 
/* const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
]; */

function calcularModa (lista1){const lista1Count = {};  // este es el objeto, vamos a crear un elemento por cada valor unico en el array

lista1.map(
    function (elemento){
        if (lista1Count[elemento]){   //  si ya existe este elemento en el objeto se le sume 1
            lista1Count[elemento] +=  1;
        } else {
            lista1Count[elemento] = 1;  // entramos al objeto y le decimos que guarde un valor igual al elemento que recibe del array
        }
    }
);
// le enviamos el objeto para convertirlo en array para poder ver cual es el valor mas grande
const lista1Array = Object.entries(lista1Count).sort(  // sort para buscar el elemento mas grande en lista1 count
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];   // si VA es mayor obtenemos positivo, si son iguales 0 y si NV es mayor obtenemos negativo(tambien se podria utilizar un if)

    }
);

const moda = lista1Array[lista1Array.length - 1];

return moda
}
