function soloLetras(texto) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto.trim())
}

function iniciarPrograma() {

    let clavedigitada;
    const contraseña = "admin"
    let acceso = false;

    for(let i = 1; i <= 3; i++) {
        clavedigitada = prompt("Digita la clave")
        if(clavedigitada === contraseña){
            acceso = true;
            break
        }
        if(i < 3){
            alert("Sigue intentando")
        } else {
            alert("No te puedes registrar")
            return; // DETIENE TODO EL PROGRAMA
        }
    }

    let nombre;
    do{
        nombre = prompt("¿cual es tu nombre?")
    } while(!soloLetras(nombre))

    let edad;
    do{
        edad = Number(prompt("¿cuantos años tienes?"))
    } while(isNaN(edad) || edad < 0)

    if(edad === 0){
        alert("Apenas saliste de vientre");
    }else if(edad < 18){
        alert("Eres menor de edad");
    } else{
        alert("Eres mayor de edad")
    }


    let correo;
    do {
        correo = prompt("Digita tu correo electronico")
    } while(!correo.endsWith("@gmail.com"))

    let estado = confirm("la persona esta activa") 

    console.log ("te llamas: " + nombre + "\ntu edad es:" + edad + "\ntu correo es: " + correo + "\nestado:" + estado)
    alert ("te llamas: " + nombre + "\ntu edad es:" + edad + "\ntu correo es: " + correo + "\nestado:" + estado)
}

iniciarPrograma() 