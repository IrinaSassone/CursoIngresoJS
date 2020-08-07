/*
WHILE. Ejercicio 6:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var promedio;
	contador=0;
	acumulador=0;
	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese cinco números:")
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1; // contador++;
	}
	promedio=acumulador/5;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}