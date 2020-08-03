/*
IF. Ejercicio 9:
Al presionar el botón, mostrar un número Random del 1 al 10 inclusive.
*/
function mostrar()
{
	var numeroRandom;
	numeroRandom=Math.floor((Math.random() * 10) + 1);

	alert(numeroRandom);	
}