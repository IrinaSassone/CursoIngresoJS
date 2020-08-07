/*
WHILE. Ejercicio 4:
Al presionar el botón pedir un número entre 0 y 9 inclusive.
*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=prompt("Ingrese un número del 0 al 9:");
	numeroIngresado=parseInt(numeroIngresado);
	while(numeroIngresado<0 || numeroIngresado>9) // (!(numeroIngresado>-1 && numeroIngresado<10))
	{
		numeroIngresado=prompt("¡ERROR! Por favor, ingrese un número del 0 al 9:");
	}
	txtIdNumero.value=numeroIngresado;
}