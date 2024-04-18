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
/*
let item = { nombre: 'Leche', cantidad: 1 };
console.log("Item: " + item.nombre);
console.log("Cantidad: " + item.cantidad);

console.log("Item: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: " + item.precio+"Bs");
console.log("Total: " + item.cantidad*item.precio+"Bs");
*/
let carrito = [{ nombre: 'Leche', cantidad: 1, precio: 7.5 },
    { nombre: 'Carne', cantidad: 2, precio: 30.5},
    { nombre: 'Fideo', cantidad: 1, precio: 5.5},
    { nombre: 'Papa', cantidad: 3, precio: 20.5}];
item = { nombre: 'Arroz', cantidad: 2, precio: 30.5};
carrito.push(item);

let carrito2 = [{ nombre: 'Leche', cantidad: 1, precio: 7.5 },
    { nombre: 'Carne', cantidad: 2, precio: 30.5},
    { nombre: 'Fideo', cantidad: 1, precio: 5.5},
    { nombre: 'Papa', cantidad: 3, precio: 20.5}];
item = { nombre: 'Arroz', cantidad: 2, precio: 30.5};
carrito2.push(item);
//Buscar funciones o procesos para ordenar un array
//Ordenar el array de carrito
//Ordenar un array lineal
/*let numeros=[4,2,6,1,8,3,10];
numeros.sort((a,b)=>a-b);
console.log(numeros);
*/
console.log("IMPRESION ORDENADA POR PRECIO");
carrito2.sort((x,y)=>x.precio - y.precio);
console.log(carrito2);

console.log("IMPRESION ORDENADA POR NOMBRE");
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carrito);
