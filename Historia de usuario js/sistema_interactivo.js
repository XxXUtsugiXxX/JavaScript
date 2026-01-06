let nombre = prompt("¿Cuál es tu nombre?");
let edad;

do{
    edad = Number(prompt("¿Cuántos años tienes?"));
}while(isNaN(edad) || edad <= 0);

if(edad < 18){
    alert("Hola " + nombre + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");

}else {
    alert("Hola " + nombre + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
}

