/*
TP1:
Para el departamento de facturación:
A. Ingresar tres precios de productos y mostrar la suma de los mismos.
B. Ingresar tres precios de productos y mostrar el promedio de los mismos.
C. ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
// Espacios para bloques lógicos.
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	alert(suma);
}

function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	promedio=suma/3;

	alert(promedio);
}

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var iva;
	var precioFinal;

	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	iva=suma*0.21;

	precioFinal=suma+iva;

	alert(precioFinal);	
}