const productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Celular", precio: 1200 },
  { id: 3, nombre: "Camiseta", precio: 25 },
  { id: 4, nombre: "Licuadora", precio: 180 }
];

// Crear un Set con números repetidos
const numeros = new Set([1, 2, 3, 2, 4, 1, 5]);

console.log("Set inicial (sin duplicados):", numeros);

// Agregar un nuevo número
numeros.add(6);
console.log("Después de agregar 6:", numeros);

// Verificar si existe un número
console.log("Existe el número 3", numeros.has(3)); // true
console.log("Existe el número 10", numeros.has(10)); // false

// Eliminar un número
numeros.delete(2);
console.log("Después de eliminar 2:", numeros);

// Recorrer el Set
console.log("Recorriendo el Set:");
for (const num of numeros) {
  console.log(num);
}
 
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