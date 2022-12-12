
let nombre = "Programacion" + "Facil";
let clase = "Clase10"
let saludo = "Les doy la bienvenida a  ";
let FraseCompleta = saludo + nombre + clase;

console.log(FraseCompleta);

let frase = "Javascript" + "es un lenguaje" + "esencial para crear" + "sitios web poderosos.";
console.log(frase);


let numeroString1 = "10";
let texto = "Numeros";
let numeroString2 = "20";
let numeroString3 = "30";
let concatenaNumeros = numeroString1  +  texto  +  numeroString2  +  texto + numeroString3;
console.log(concatenaNumeros,texto);


var dato= prompt("Cual es tu Nombre");
console.warn(dato);

var apellido= prompt("Cual es su Apellido");
console.warn(apellido);

var age= prompt("Cual es su edad");
console.warn(age);
if (age>= 18){
    alert("Puedes entrar");
}
else{
    alert("No puedes entrar");
}



for(i=20; i<=70; i++){
    document.write("El numero es: " + i + "<br>");
}
