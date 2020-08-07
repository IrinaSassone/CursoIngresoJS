/*
PARCIAL 2020.
Ejercicio 1:
Debemos realizar la carga de 5 (cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
- El tipo (validar "barbijo", "jabón" o "alcohol"),
- El precio (validar entre 100 y 300),
- La cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
- La marca y el fabricante.
Se debe informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante.
b) Del tipo con mas unidades, el promedio por compra.
c) Cuántas unidades de jabones hay en total.
*/
function mostrar()
{
  var producto;
  var cantidadProducto;
  var precio;
  var cantidadUnidades;
  var marca;
  var fabricante;
  cantidadProducto=0;
  do
  {
    producto=prompt("Ingrese un producto:");
    while(producto!="barbijo" && producto!="jabon" && producto!="alcohol")
    {
      producto=prompt("ERROR. \nPor favor, reingrese un producto:");
    }
    
    precio=prompt("Ingrese el precio del producto:");
    precio=parseFloat(precio);
    while(precio<99 || precio>301)
    {
      precio=prompt("ERROR. \nPor favor, reingrese el precio del producto:");
      precio=parseFloat(precio);
    }
    cantidadUnidades=prompt("Ingrese la cantidad de productos:");
    cantidadUnidades=parseInt(cantidadUnidades);
    while(cantidadUnidades<0 || cantidadUnidades>1001)
    {
      cantidadUnidades=prompt("ERROR. \nPor favor, reingrese la cantidad de productos:");
      cantidadUnidades=parseInt(cantidadUnidades);
    }
    marca=prompt("Ingrese la marca del producto:");
    fabricante=prompt("Ingrese el fabricante del producto:");
    cantidadProducto++;
  }while(cantidadProducto<6)
}