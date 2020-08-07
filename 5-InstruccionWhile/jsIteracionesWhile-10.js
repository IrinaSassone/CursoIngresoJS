/*
WHILE. Ejercicio 10:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1. Suma de los negativos.
2. Suma de los positivos.
3. Cantidad de positivos.
4. Cantidad de negativos.
5. Cantidad de ceros.
6. Cantidad de números pares.
7. Promedio de positivos.
8. Promedios de negativos.
9. Diferencia entre positivos y negativos, (positivos-negativos). 		
*/
function mostrar()
{
	// Declarar contadores y variables.
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadNumerosPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var respuesta;
	do
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos++;
		}else if(numeroIngresado==0)
		{
			cantidadCeros++;
		}else
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos++;
		}
		if(numeroIngresado%2==0) 
        {
    		cantidadNumerosPares++;
        }
		respuesta=prompt("¿Desea ingresar otro número?");
	}while(respuesta=='si');
	promedioPositivos=sumaPositivos/cantidadPositivos; // Tener en cuenta los ceros.
    promedioNegativos=sumaNegativos/cantidadNegativos; // Tener en cuenta los ceros. 
    diferencia=sumaPositivos-sumaNegativos;
	document.write("La suma de números positivos es de: "+sumaPositivos+" y la de números negativos es de: "+sumaNegativos+".</br>La cantidad de números positivos es de: "+cantidadPositivos+" y la cantidad de números negativos es de: "+cantidadNegativos+". </br>La cantidad de ceros es de: "+cantidadCeros+".</br>La cantidad de números pares es de: "+cantidadNumerosPares+".</br>El promedio entre los números positivos es de: "+promedioPositivos+" y el de negativos es de: "+promedioNegativos+".</br>La diferencia entre números positivos y números negativos es de: "+diferencia+".");
}