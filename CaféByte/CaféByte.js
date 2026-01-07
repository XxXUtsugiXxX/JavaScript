let nombreCliente = ""
let producto = ""
let cantidad = 0
let precioUnitario = 0
let total = 0
let opcion = 0
let tipoConsumo = ""
let estadoPedido = ""
let pedidoRegistrado = false

alert("SISTEMA DE GESTION DE PEDIDO")

while(opcion !== 5){
        opcion = Number(prompt(
        "Seleccione una opción:\n"+
        "1. Registrar pedido:\n"+
        "2. Ver información del pedido:\n"+
        "3. Calcular total a pagar:\n"+
        "4. cambiar estado del pedido:\n"+
        "5. Salir del sistema"

    ))

    if (opcion === 1){
        nombreCliente = prompt("Digita tu nombre: ")
        producto = prompt("digita el nombre del producto: ")

        cantidad = Number(prompt("digita la cantidad"))
        if (isNaN(cantidad) || cantidad <= 0){
            alert("cantidad invalida")
            continue
        }else{

            precioUnitario = Number(prompt("digita el precio unitario: "))
            if (isNaN(precioUnitario) || precioUnitario <= 0){
                alert("precio invalido")
                continue
            }else{
                
                tipoConsumo = prompt("consumir en tienda o para llevar?")
                estadoPedido = "En preparación"

                alert("el nombre del cliente: " + nombreCliente +
                    "producto: " + producto +
                    "cantidad: " + cantidad +
                    "precio unitario: " + precioUnitario +
                    "tipo de consumo: " + tipoConsumo +
                    "estado del pedido: " + estadoPedido 
                )
                pedidoRegistrado = confirm("está correcto el pedido?")
                
                if(pedidoRegistrado === true){
                    alert("El pedido ha sido registrado exitosamente")
                    pedidoRegistrado === true
                }else{
                    alert("Vuelve a registrarlo")
                }
                
                }

            }

    }
    else if(opcion === 2){

        if(pedidoRegistrado === false){
            alert("No hay pedidos registrados")
        } 
        else{
            alert("el nombre del cliente: " + nombreCliente +
                "producto: " + producto +
                "cantidad: " + cantidad +
                "precio unitario: " + precioUnitario +
                "tipo de consumo: " + tipoConsumo +
                "estado del pedido: " + estadoPedido 
                )
            }
    }
    else if(opcion === 3){
        if(pedidoRegistrado === false){
            alert("No hay pedidos registrados")
        } 
        else{
            total = precioUnitario * cantidad
            alert("el total del pedido es: " + total)
                
            }

    }


}