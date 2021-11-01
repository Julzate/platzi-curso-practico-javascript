function alturaTrianguloIsosceles( lado1,lado2, base){
    if (lado1 === lado2 && base !== lado1){
    const altura= Math.sqrt(lado1*lado2-(base**2/4))
    console.log ("La altura del triángulo es: " + altura)
    }
   else {
       console.error("Los daots ingresados no corresponden a un triángulo isosceles")
   } 
}


    