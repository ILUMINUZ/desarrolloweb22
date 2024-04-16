//Compras a un supermercado
/*let carrito=["leche",1,
             "carne",2,
             "papa",3,
             "fideos",1];

console.log("Item:"+carrito[0]);
console.log("Cantidad::"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad::"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad::"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad::"+carrito[7]);
console.log("IMPRESION COMPLETA")
console.log(carrito);

carrito.push("arroz", 5);
console.log(carrito);
*/

let item = { nombre: 'Leche', cantidad: 1 };
console.log("Item: " + item.nombre);
console.log("Cantidad: " + item.cantidad);

let carrito = [
    { nombre: 'Leche', cantidad: 1, precio: '4.5bs', total: '4.5' },
    { nombre: 'Carne', cantidad: 2, precio: '7.5bs', total: '15bs' },
    { nombre: 'Fideo', cantidad: 1, precio: '3.5bs', total: '3.5bs' },
    { nombre: 'Papa', cantidad: 3, precio: '5.5bs', total: '16.5bs' }
];
console.log(carrito);

item = { nombre: 'Arroz', cantidad: 5, precio: '4bs', total: '20bs' };
carrito.push(item);
console.log(carrito);

// Imprimirlo con etiquetas
// Adicionar un nuevo registro
console.log("Item: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: " + item.precio);
console.log("Total: " + item.total);