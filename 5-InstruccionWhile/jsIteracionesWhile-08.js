/*
WHILE. Ejercicio 8:
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	var numeroIngresado;
	var sumaPositivos;
	var multiplicacionNegativos;
	var respuesta;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	do
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
		else
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		respuesta=prompt("¿Quiere ingresar otro número?");
	}while(respuesta=="si");
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}