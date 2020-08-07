/*
WHILE. Ejercicio 9:
Al presionar el botón pedir números hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	// Declarar variables.
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	// Iniciar variables.
	banderaDelPrimero=1;
	do	
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		if(banderaDelPrimero==1 || numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		if(banderaDelPrimero==1 || numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		banderaDelPrimero=0;
		respuesta=prompt("¿Desea ingresar más números?");
	}while(respuesta=="si");
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}