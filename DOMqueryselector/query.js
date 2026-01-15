const productos = [
  { categoria: "Electronica", nombre: "Laptop", precio: 2500 },
  { categoria: "Telefonos", nombre: "Celular", precio: 1200 },
  { categoria: "Ropa", nombre: "Camisa", precio: 400 },
  { categoria: "Hogar", nombre: "Licuadora", precio: 800 }
];

const preciosConIva = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precioFinal: producto.precio * 1.19
  };
});

console.log(preciosConIva);

const nombres = ["ana", "luis"];
const mayusculas = nombres.map(n => n.toUpperCase());


 
const mapProductos = new Map();
mapProductos.set("Electronica ", {nombre : "Laptop ", precio : "2500" });
mapProductos.set("Telefonos ", {nombre : "Celular ", precio : "1200" });
mapProductos.set("Ropa ", {nombre : "Camisa ", precio : "400" });
mapProductos.set("Hogar ", {nombre : "Licuadora ", precio : "800" });

console.log(mapProductos);

console.log(mapProductos.get("Ropa"));

console.log("Recorriendo map: ");
mapProductos.forEach((valor, clave) => {
    console.log("Categoria: " + clave + "Producto: " + valor.nombre + "precio: " + valor.precio);
})